report({
  "testSuite": "BackstopJS",
  "tests": [
    {
      "pair": {
        "reference": "../bitmaps_reference/backstop_default_news_list_0_document_0_desktop.png",
        "test": "../bitmaps_test/20200223-215041/backstop_default_news_list_0_document_0_desktop.png",
        "selector": "document",
        "fileName": "backstop_default_news_list_0_document_0_desktop.png",
        "label": "news list",
        "requireSameDimensions": true,
        "misMatchThreshold": 0.1,
        "url": "http://localhost:8080/",
        "referenceUrl": "",
        "expect": 0,
        "viewportLabel": "desktop",
        "diff": {
          "isSameDimensions": true,
          "dimensionDifference": {
            "width": 0,
            "height": 0
          },
          "misMatchPercentage": "10.88",
          "analysisTime": 451
        },
        "diffImage": "../bitmaps_test/20200223-215041/failed_diff_backstop_default_news_list_0_document_0_desktop.png"
      },
      "status": "fail"
    },
    {
      "pair": {
        "reference": "../bitmaps_reference/backstop_default_news_list_0_document_1_tablet.png",
        "test": "../bitmaps_test/20200223-215041/backstop_default_news_list_0_document_1_tablet.png",
        "selector": "document",
        "fileName": "backstop_default_news_list_0_document_1_tablet.png",
        "label": "news list",
        "requireSameDimensions": true,
        "misMatchThreshold": 0.1,
        "url": "http://localhost:8080/",
        "referenceUrl": "",
        "expect": 0,
        "viewportLabel": "tablet",
        "diff": {
          "isSameDimensions": true,
          "dimensionDifference": {
            "width": 0,
            "height": 0
          },
          "misMatchPercentage": "12.33",
          "analysisTime": 343
        },
        "diffImage": "../bitmaps_test/20200223-215041/failed_diff_backstop_default_news_list_0_document_1_tablet.png"
      },
      "status": "fail"
    },
    {
      "pair": {
        "reference": "../bitmaps_reference/backstop_default_on_page_next_0_document_0_desktop.png",
        "test": "../bitmaps_test/20200223-215041/backstop_default_on_page_next_0_document_0_desktop.png",
        "selector": "document",
        "fileName": "backstop_default_on_page_next_0_document_0_desktop.png",
        "label": "on page next",
        "requireSameDimensions": true,
        "misMatchThreshold": 0.1,
        "url": "http://localhost:8080/?page=2",
        "referenceUrl": "",
        "expect": 0,
        "viewportLabel": "desktop",
        "diff": {
          "isSameDimensions": true,
          "dimensionDifference": {
            "width": 0,
            "height": 0
          },
          "misMatchPercentage": "10.60",
          "analysisTime": 432
        },
        "diffImage": "../bitmaps_test/20200223-215041/failed_diff_backstop_default_on_page_next_0_document_0_desktop.png"
      },
      "status": "fail"
    },
    {
      "pair": {
        "reference": "../bitmaps_reference/backstop_default_on_page_next_0_document_1_tablet.png",
        "test": "../bitmaps_test/20200223-215041/backstop_default_on_page_next_0_document_1_tablet.png",
        "selector": "document",
        "fileName": "backstop_default_on_page_next_0_document_1_tablet.png",
        "label": "on page next",
        "requireSameDimensions": true,
        "misMatchThreshold": 0.1,
        "url": "http://localhost:8080/?page=2",
        "referenceUrl": "",
        "expect": 0,
        "viewportLabel": "tablet",
        "diff": {
          "isSameDimensions": true,
          "dimensionDifference": {
            "width": 0,
            "height": 0
          },
          "misMatchPercentage": "12.01",
          "analysisTime": 328
        },
        "diffImage": "../bitmaps_test/20200223-215041/failed_diff_backstop_default_on_page_next_0_document_1_tablet.png"
      },
      "status": "fail"
    }
  ],
  "id": "backstop_default"
});