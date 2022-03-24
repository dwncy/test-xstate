import { createMachine } from "xstate";

export const dummyMachine = createMachine({
  "id": "Movement Schedule",
  "initial": "Filter Page",
  "states": {
    "Filter Page": {
      "on": {
        "submit": {
          "target": "Result Page"
        }
      }
    },
    "Result Page": {
      "initial": "view Mode",
      "states": {
        "view Mode": {
          "on": {
            "backFilter": {
              "target": "#Movement Schedule.Filter Page"
            },
            "modify": {
              "target": "edit Mode"
            },
            "showOriginHubModal": {
              "target": "origin hub Modal shown"
            }
          }
        },
        "edit Mode": {
          "on": {
            "close": {
              "target": "view Mode"
            }
          }
        },
        "origin hub Modal shown": {
          "on": {
            "yesBtn": {
              "target": "edit Mode"
            },
            "noBtn": {
              "target": "view Mode"
            }
          }
        }
      }
    }
  }
})
