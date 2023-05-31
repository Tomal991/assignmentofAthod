export const DynamicFormControls = [
   {
      "label":"Name",
      "type":"Text",
      "mandatory":1,
      "maxLength":50,
      "minLength":2,
      "maxValue":99,
      "minValue":18,
      "sorting":1,
      "subItems":[
         
      ]
   },
   {
      "label":"Age",
      "type":"Numeric",
      "mandatory":1,
      "maxLength":2,
      "minLength":2,
      "maxValue":99,
      "minValue":18,
      "sorting":2,
      "subItems":[
         
      ]
   },
   {
      "label":"Gender",
      "type":"RadioButton",
      "mandatory":1,
      "maxLength":null,
      "minLength":null,
      "maxValue":null,
      "minValue":null,
      "sorting":3,
      "subItems":[
         {
            "id":1,
            "label":"Male"
         },
         {
            "id":2,
            "label":"Female"
         }
      ]
   },
   {
      "label":"Education",
      "type":"Single Choice",
      "mandatory":1,
      "maxLength":null,
      "minLength":null,
      "maxValue":null,
      "minValue":null,
      "sorting":3,
      "subItems":[
         {
            "id":1,
            "label":"Class 12th"
         },
         {
            "id":2,
            "label":"Graduate"
         },
         {
            "id":3,
            "label":"Post-graduate and above"
         },
         {
            "id":4,
            "label":"Diploma/ITI"
         }
      ]
   },
  {
    "label":"Mobile No",
    "type":"Numeric",
    "mandatory":1,
    "maxLength":10,
    "minLength":10,
    "maxValue":null,
    "minValue":null,
    "sorting":3,
    "subItems":[

    ]
  }

 ]
 