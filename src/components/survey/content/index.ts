export const questions = {
    // showProgressBar: "top",
    showQuestionNumbers: "off",
    pages: [
      // {
      //   name: "page1",
      //   elements: [
      //     {
      //       type: "radiogroup",
      //       name: "free_registered_user",
      //       title: "Question 1",
      //       // description: "Thank you for using our service.",
      //       isRequired: true,
      //       description: "Would you like to become a free registered user",
  
      //       choices: ["Yes", "No"],
      //     },
      //   ],
      // },
      {
        name: "page1",
        elements: [
          {
            type: "panel",
            title: "Question 1",
            name: "GeoInformation",
            description: "Geo Demographics",
            elements: [
              {
                type: "dropdown",
                name: "region",
                title: "Region",
                isRequired: true,
                startWithNewLine: false,
                defaultValue: "Americas",
                choices: ["Americas"],
                // choices: ["Africa", "Americas", "Asia", "Europe", "Oceania"],
              },
              {
                type: "dropdown",
                name: "country",
                title: "Country",
                startWithNewLine: false,
                defaultValue: "United States",
                choices: ["United States"],
                isRequired: true,
  
                // choicesByUrl: {
                //   url: "/api/country/{region}",
                // },
              },
              {
                type: "dropdown",
                name: "state",
                title: "State",
                isRequired: true,
                choicesByUrl: {
                  // url: "/api/state/{country}",
                  url: "/api/state/all",
                },
              },
              {
                type: "dropdown",
                name: "city",
                title: "City",
                isRequired: true,
                choicesByUrl: {
                  url: "/api/city/{state}",
                },
              },
              {
                type: "text",
                name: "PostalCode",
                title: "Postal (non-US)  or ZipCode (US)",
                inputType: "number",
                isRequired: true,
              },
              {
                type: "html",
                name: "info",
                // html: "<Link href='/learn-more'><a class='sv-btn learn-more'>Learn more</a></Link>",
                html: "<a href='/learn-more/question2' class='sv-btn learn-more'>Learn more</a>",
              },
            ],
          },
        ],
      },
      {
        name: "page2",
        elements: [
          {
            type: "panel",
            title: "Question 2",
            name: "Question2",
            description: "What Industry Do You Work In ?",
            elements: [
              {
                type: "dropdown",
                name: "TypeOfEmployer",
                title: "Type of Employer",
                isRequired: true,
                choices: [
                  "Company - Publicy Traded",
                  "Company - Private",
                  "College / University",
                  "Contract",
                  "Fellowship",
                  "Foundation / Trust",
                  "Franchise",
                  "Government - Federal",
                  "Government - State & Local",
                  "Hospital",
                  "Military",
                  "Non-Profit Organization",
                  "Private Practice/Firm",
                  "School / School District",
                  "Self-Employed",
                  "Team",
                  "Other Organization",
                  "None of above",
                ],
              },
              {
                type: "dropdown",
                name: "Industry",
                title: "Industry",
                hasOther: true,
                isRequired: true,
                choicesByUrl: {
                  url: "/api/industry/{TypeOfEmployer}",
                },
              },
              {
                type: "html",
                name: "info",
                // html: "<Link href='/learn-more'><a class='sv-btn learn-more'>Learn more</a></Link>",
                html: "<a href='/learn-more/question3' class='sv-btn learn-more'>Learn more</a>",
              },
            ],
          },
        ],
      },
      {
        name: "page3",
        elements: [
          {
            type: "panel",
            title: "Question 3",
            name: "EmployerName",
            description: "What is your EmployerName?",
            elements: [
              {
                type: "text",
                name: "EmployerName",
                title: "What is the name of your employer",
                isRequired: true,
              },
            ],
          },
        ],
      },
      {
        name: "page4",
        elements: [
          {
            type: "panel",
            title: "Question 4",
            name: "CareerTrack",
            description: "What is your Current Career Track?",
            elements: [
              {
                type: "dropdown",
                name: "CurrentCareerPath",
                title: "Current career path",
                isRequired: true,
                choices: ["Non-Management", "Manager", "Director", "Executive"],
              },
              {
                type: "dropdown",
                name: "CurrentCareerTrack",
                title: "Current career track",
                isRequired: true,
                choicesByUrl: {
                  url: "/api/career/{CurrentCareerPath}",
                },
              },
              {
                type: "html",
                name: "info",
                // html: "<Link href='/learn-more'><a class='sv-btn learn-more'>Learn more</a></Link>",
                html: "<a href='/learn-more/question5' class='sv-btn learn-more'>Learn more</a>",
              },
            ],
          },
        ],
      },
  
      {
        name: "page5",
        elements: [
          {
            type: "panel",
            title: "Question 5",
            name: "jobLevel",
            description: "What is your current job level?",
            elements: [
              {
                type: "dropdown",
                name: "CurrentJobLevel",
                title: "Current job level",
                isRequired: true,
                choicesByUrl: {
                  url: "/api/jobLevel/{CurrentCareerPath}",
                },
              },
            ],
          },
        ],
      },
  
      {
        name: "page6",
        elements: [
          {
            type: "panel",
            title: "Question 6",
            name: "job_family",
            description: "Please choose your job family from the drop down menu.",
            elements: [
              {
                type: "dropdown",
                name: "JobFamily",
                title: "Job Family",
                isRequired: true,
                choicesByUrl: {
                  url: "/api/jobFamily/all",
                },
              },
            ],
          },
          {
            type: "panel",
            title: "Question 7",
            name: "job_sub_family",
            description:
              "Please choose your job sub-family from the drop down menu.",
            elements: [
              {
                type: "dropdown",
                name: "JobSubFamily",
                title: "Job Sub-Family",
                isRequired: true,
                choicesByUrl: {
                  url: "/api/jobSubFamily/{JobFamily}",
                },
              },
            ],
          },
        ],
      },
  
      {
        name: "page7",
        elements: [
          {
            type: "panel",
            title: "Question 8",
            name: "current_job_title",
            description: "What is your current job title?",
            elements: [
              {
                type: "text",
                name: "CurrentJobTitle",
                title: "Current job title",
                isRequired: true,
              },
            ],
          },
        ],
      },
  
      {
        name: "page8",
        elements: [
          {
            type: "panel",
            title: "Question 9",
            name: "base_pay",
            description: "What is your base pay this year?",
            elements: [
              {
                type: "text",
                name: "BasePayThisYear",
                title: "Base pay this year",
                inputType: "number",
                isRequired: true,
              },
            ],
          },
        ],
      },
  
      {
        name: "page9",
        elements: [
          {
            type: "panel",
            title: "Question 10",
            name: "target_incentive_thisYear",
            description: "What is your target incentive this year?",
            elements: [
              {
                type: "text",
                name: "TargetIncentiveThisYear",
                title: "Target incentive",
                inputType: "number",
                isRequired: true,
              },
            ],
          },
        ],
      },
      {
        name: "page10",
        elements: [
          {
            type: "panel",
            title: "Question 11",
            name: "target_quota_thisYear",
            description: "What is your target quota this year?",
            elements: [
              {
                type: "text",
                name: "TargetQuotaThisYear",
                title: "Target quota",
                inputType: "number",
                isRequired: true,
              },
            ],
          },
        ],
      },
      {
        name: "page11",
        elements: [
          {
            type: "panel",
            title: "Question 12",
            name: "prior_year_quota_attainment",
            description: "What was your prior year quota attainment %?",
            elements: [
              {
                type: "text",
                name: "PriorYearQuotaAttainment",
                title: "Prior year quota attainment",
                isRequired: true,
                inputType: "number",
                min: 0,
                max: 100,
                step: 1,
                validators: [
                  {
                    type: "numeric",
                    minValue: 0,
                    maxValue: 100,
                    errorText: "Your value is not in the range [0...100]",
                  },
                ],
              },
            ],
          },
        ],
      },
      {
        name: "page12",
        elements: [
          {
            type: "panel",
            title: "Question 13",
            name: "prior_year_incentive_attainment",
            description: "What was your prior year incentive attainment %?",
            elements: [
              {
                type: "text",
                name: "PriorYearIncentiveAttainment",
                title: "Prior year incentive attainment",
                isRequired: true,
                inputType: "number",
                min: 0,
                max: 100,
                step: 1,
                validators: [
                  {
                    type: "numeric",
                    minValue: 0,
                    maxValue: 100,
                    errorText: "Your value is not in the range [0...100]",
                  },
                ],
              },
            ],
          },
        ],
      },
    ],
  };
  