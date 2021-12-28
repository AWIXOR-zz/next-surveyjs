import React from "react";
import * as Survey from "survey-react";
import Link from "next/link";
// import $ from "jquery";
// import "nouislider/distribute/nouislider.min.css";
// import "easy-autocomplete/dist/easy-autocomplete.css";
// import * as widgets from "surveyjs-widgets";
import { questions } from "./content";
import { Container } from "./styles";

import "survey-react/modern.css";

const PartOne = () => {
  Survey.StylesManager.applyTheme("modern");
  //   window["$"] = window["jQuery"] = $;
  //   require("easy-autocomplete/dist/jquery.easy-autocomplete.js");
  //   widgets.autocomplete(Survey);
  //   widgets.nouislider(Survey);

  const survey = new Survey.Model(questions);
  survey.surveyShowDataSaving = true;
  survey.completeText = "Finish";
  // survey.clearInvisibleValues = "none";

  Survey.surveyStrings.savingData =
    "Please wait. We are validating and saving your response.";

  // uncomment this if u want answers not to be lost

  // survey.sendResultOnPageNext = true;
  // const storageName = "CompMinerSurveyPartOne";
  // function saveSurveyData(survey) {
  //   let data = survey.data;
  //   data.pageNo = survey.currentPageNo;
  //   window.localStorage.setItem(storageName, JSON.stringify(data));
  //   console.log(data);
  // }
  // survey.onPartialSend.add(function (survey) {
  //   saveSurveyData(survey);
  // });
  survey.onComplete.add(function (survey, options) {
    // saveSurveyData(survey);
    window.location.href = "/part1/finish";
  });
  // const prevData = window.localStorage.getItem(storageName) || null;
  // if (prevData) {
  //   let data = JSON.parse(prevData);
  //   survey.data = data;
  //   if (data.pageNo) {
  //     survey.currentPageNo = data.pageNo;
  //   }
  // }

  survey.showCompletedPage = false;
  return (
    <Container className="container">
      <Survey.Survey model={survey} />
    </Container>
  );
};

export default PartOne;
