import React, { Component } from "react";
import * as Survey from "survey-react";
import "survey-react/survey.css";
import SurveyCreator from "./SurveyCreator";
import logo from "./logo.svg";
import "./App.css";
import "bootstrap/dist/css/bootstrap.css";

import "jquery-ui/themes/base/all.css";
import "nouislider/distribute/nouislider.css";
import "select2/dist/css/select2.css";
import "bootstrap-slider/dist/css/bootstrap-slider.css";

import "jquery-bar-rating/dist/themes/css-stars.css";

import $ from "jquery";
import "jquery-ui/ui/widgets/datepicker.js";
import "select2/dist/js/select2.js";
import "jquery-bar-rating";

import * as widgets from "surveyjs-widgets";

import "icheck/skins/square/blue.css";
window["$"] = window["jQuery"] = $;
require("icheck");

Survey.StylesManager.applyTheme("default");

widgets.icheck(Survey, $);
widgets.select2(Survey, $);
widgets.inputmask(Survey);
widgets.jquerybarrating(Survey, $);
widgets.jqueryuidatepicker(Survey, $);
widgets.nouislider(Survey);
widgets.select2tagbox(Survey, $);
widgets.signaturepad(Survey);
widgets.sortablejs(Survey);
widgets.ckeditor(Survey);
widgets.autocomplete(Survey, $);
widgets.bootstrapslider(Survey);

class App extends Component {
  json = {
    title: "Product Feedback Survey Example",
    showProgressBar: "top",
    pages: [
      {
        elements: [
          {
            "type": "radiogroup",
            "name": "position",
            "title": "Choose job position...",
            "isRequired": true,
            "colCount": 0,
            "choices": ["1|Designer", "2|Front-end Developer", "3|Back-end Developer", "4|Database Administrator", "5|System Engineer"]
          },
          {
            type: "imagepicker",
            name: "choosepicture",
            title: "What animal would you like to see first ?",
            choices: [
              {
                value: "lion",
                imageLink:
                  "https://surveyjs.io/Content/Images/examples/image-picker/lion.jpg"
              },
              {
                value: "giraffe",
                imageLink:
                  "https://surveyjs.io/Content/Images/examples/image-picker/giraffe.jpg"
              },
              {
                value: "panda",
                imageLink:
                  "https://surveyjs.io/Content/Images/examples/image-picker/panda.jpg"
              },
              {
                value: "camel",
                imageLink:
                  "https://surveyjs.io/Content/Images/examples/image-picker/camel.jpg"
              }
            ]
          },
          {
            type: "signaturepad",
            name: "sign",
            title: "Please enter your signature"
          },
          {
            type: "sortablelist",
            name: "lifepriopity",
            title: "Life Priorities ",
            isRequired: true,
            colCount: 0,
            choices: ["family", "work", "pets", "travels", "games"]
          },
          {
            name: "date",
            type: "datepicker",
            inputType: "date",
            title: "Дата приёма:",
            dateFormat: "mm/dd/yy",
            isRequired: true
          }
        ]
      }
    ]
  };

  onValueChanged(result) {
    console.log("value changed!");
  }

  onComplete(result) {
    console.log("Complete! " + result);
  }

  render() {
    Survey.Survey.cssType = "bootstrap";
    var model = new Survey.Model(this.json);
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React with SurveyJS</h2>
        </div>
        <div className="surveyjs">
          {/*If you want to show survey, uncomment the line below*/}
          <h1>SurveyJS library in action:</h1>
          <Survey.Survey
            model={model}
            onComplete={this.onComplete}
            onValueChanged={this.onValueChanged}
          />
          {/*If you do not want to show Survey Creator, comment the line below*/}
          <h1>SurveyJS Creator in action:</h1>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
