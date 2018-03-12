import { Component } from "@angular/core";
import { AuthService } from "../../../auth.service";
import { Router, ActivatedRoute } from "@angular/router";
import { FormBuilder, FormControl, FormGroup, Validators } from "@angular/forms";
import { agencySummary } from "../../model/agencySummary";
import { AdminService } from "../../admin.service";
import { User } from "../../../user";
import { Align } from "@progress/kendo-angular-popup"; 

@Component({
    selector: "create-user",
    templateUrl: "app/admin/manage-user/user-update/user-edit.component.html",
    providers: [AuthService, AdminService],
    styleUrls: ["app/admin/manage-user/user-update/user-edit.component.css"]
})
export class UserEditComponent {
    title: string = "Edit User";
    userForm: FormGroup = null;
    selectedAgencies: Array<agencySummary> = [];
    districts: Array<agencySummary> = [];
    userId: string;
    errorMessage: string;
    user: any;
    show: boolean = false;
    agencyCode: number;
    adminstrator: boolean = false;
    state: boolean = false;
    districtAdmin: boolean = false;
    psaddsurveys: boolean = false;
    pssubmitverification: boolean = false;
    psviewreports: boolean = false;
    anchorAlign: Align = { horizontal: "left", vertical: "top" };
    popupAlign: Align = { horizontal: "left", vertical: "bottom" };

    constructor(private as: AuthService, private router: Router, private route: ActivatedRoute, private fb: FormBuilder, private adminService: AdminService) {
        if (!this.as.isLoggedIn()) {
            this.router.navigate(["/login"]);
        }
        
        this.adminService
            .getAgenciesCCTS()
            .subscribe(result => {
                this.districts = result;                
            });

        this.user = JSON.parse(localStorage.getItem("cctstsf-user"));
        localStorage.removeItem("cctstsf-user");               
    }

    ngOnInit() {
        this.userForm = this.fb.group(
            {
                email: [
                    "", [
                        Validators.required,
                        Validators.pattern(/^[A-Za-z0-9._% +-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,3}/)
                    ]
                ],
                password: ["", null],
                passwordConfirm: ["", null],
                firstName: [
                    "", [
                        Validators.required,
                        Validators.maxLength(100)
                    ]
                ],
                lastName: [
                    "", [
                        Validators.required,
                        Validators.maxLength(100)
                    ]
                ],
                district: ["", null],
                school: ["", null],
                roles: this.fb.group({
                    Administrator: [null, ""],
                    State: [null, ""],
                    DistrictAdmin: [null, ""],
                    psaddsurveys: [null, ""],
                    pssubmitverification: [null, ""],
                    psviewreports: [null, ""]
                })
            }
        );
        this.setFormDefaults();
    }

    setFormDefaults() {
        this.selectedAgencies = this.user.agencies;
        if (this.user.roles.includes("Administrators")) {
            this.adminstrator = true;
        }
        if (this.user.roles.includes("State")) {
            this.state = true;
        }
        if (this.user.roles.includes("psaddsurveys")) {
            this.psaddsurveys = true;
        }
        if (this.user.roles.includes("psubmitverification")) {
            this.pssubmitverification = true;
        }
        if (this.user.roles.includes("psviewreports")) {
            this.psviewreports = true;
        }
        if (this.user.roles.includes("DistrictAdmin")) {
            this.districtAdmin = true;
        }
    }
        
    onSubmit() {
        let id = this.districts.find(i => i.agencyName = this.userForm.controls['district'].value).agencyCode;
        let counter = 0;
        let roles = new Array<string>();
        let element = <HTMLInputElement>document.getElementById("Administrator");
        if (element.checked) {
            roles[counter] = "Administrators";
            counter++;
        }
        element = <HTMLInputElement>document.getElementById("State")
        if (element.checked) {
            roles[counter] = "State";
            counter++;
        }
        element = <HTMLInputElement>document.getElementById("DistrictAdmin")
        if (element.checked) {
            roles[counter] = "DistrictAdmin";
            counter++;
        }
        element = <HTMLInputElement>document.getElementById("psaddsurveys")
        if (element.checked) {
            roles[counter] = "psaddsurveys";
            counter++;
        }
        element = <HTMLInputElement>document.getElementById("pssubmitverification")
        if (element.checked) {
            roles[counter] = "pssubmitverification";
            counter++;
        }
        element = <HTMLInputElement>document.getElementById("psviewreports")
        if (element.checked) {
            roles[counter] = "psviewreports";
            counter++;
        }
        if (roles.length == 0) {
            roles[0] = "None";
        }
        
        let message = {
            UserName: this.userForm.controls['email'].value,
            password: this.user.password,
            passwordNew: " ",
            FName: this.userForm.controls['firstName'].value,
            LName: this.userForm.controls['lastName'].value,
            District: this.userForm.controls['district'].value,
            Email: this.userForm.controls['email'].value,
            DisplayName: this.userForm.controls['firstName'].value + ' ' + this.userForm.controls['lastName'].value,
            DistrictId: id,
            School: this.userForm.controls['school'].value,
            SchoolId: "",
            Roles: roles,
            Agencies: this.selectedAgencies,
            id: this.user.id
        };

        this.as.update(message)
            .subscribe((data) => {
                if (data.error == null) {
                    this.errorMessage = null;
                    window.alert("User update succeeded.");
                    this.router.navigate(['/user-list']);
                } else {
                    window.alert("User creation failed.");
                    this.errorMessage = data.error;                    
                }
            },
            (err) => {
                this.errorMessage = err;
            }
            );
    }

    cancel() {
        this.router.navigate['/home'];
    }

    onToggle() {
        this.show = !this.show;
    }

    firstDropDownChanged(value: any) {
        let dist = this.districts.find(i => i.agencyName == value);
        this.agencyCode = dist.id;
    }

    onSelectAddDistrict() {
        let distName = this.userForm.controls['district'].value;
        let exists = this.selectedAgencies.find(o => o.agencyName == distName);
        if (distName !== null && distName !== "" && exists == null) {
            let districtedSelected = this.districts.find(i => i.agencyName == distName);
            let count = this.selectedAgencies.length;
            this.selectedAgencies[count] = districtedSelected;
        }
    }

    addSchool() {
        let schoolName = this.userForm.controls['school'].value;
        let exists = this.selectedAgencies.find(o => o.agencyName == schoolName);
        if (schoolName !== null && schoolName !== "" && exists == null) {
            let count = this.selectedAgencies.length;
            let schoolSelected = this.districts.find(i => i.agencyName == schoolName);
            this.selectedAgencies[count] = schoolSelected;
        }
    }

    deleteSelected(id: number) {
        let dist = this.selectedAgencies.find(i => i.id == id);
        let index = this.selectedAgencies.indexOf(dist);
        this.selectedAgencies.splice(index, 1);
    }    
}