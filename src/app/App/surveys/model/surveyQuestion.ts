import { IQItem } from "./qItem";

export interface ISurveyQuestion {
    surveyId: number;
    surveyName: string;
    pageId: number;
    pageName?: any;
    questionId: number;
    questionGroupId?: any;
    text: string;
    questionTypeCode?: any;
    questionNumberText?: any;
    isRequired?: any;
    visible?: any;
    questionSortId?: any;
    instructions?: any;
    pageSortId?: any;
    leaverYear?: any;
    surveyTypeCode?: any;
    qItem: IQItem[];

}