export interface ISurveyDetail {
    id: number,         
    surveyId: number,
    surveyName: string,
    pageId: number,
    pageName: string,
    
    questionId: number,
    questionGroupId: string,
    text: string,
    questionTypeCode: string,
    questionNumberText: number,
    
    isRequired?: boolean,
    visible?: boolean,
    questionSortId: number,
    instructions: string,
    pageSortId: number
}