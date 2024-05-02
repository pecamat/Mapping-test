const scaleMappings = {
  'Method': ['1-4', '1-4', '4-1'],
  'Goal': ['1-4', '1-4', '4-1'],
  'Theming': ['4-1', '4-1', '4-1'],
  'Governance': ['1-4', '4-1', '1-4'],
  'Structure': ['1-4', '4-1'],
  'Focus': ['1-4', '4-1', '1-4']
};

const questionToScaleMappings = {
  'q1': 'Method',
  'q2': 'Method',
  'q3': 'Method',
  'q4': 'Goal',
  'q5': 'Goal',
  'q6': 'Goal',
  'q7': 'Theming',
  'q8': 'Theming',
  'q9': 'Theming',
  'q10': 'Governance',
  'q11': 'Governance',
  'q12': 'Governance',
  'q13': 'Structure',
  'q14': 'Structure',
  'q15': 'Focus',
  'q16': 'Focus',
  'q17': 'Focus'
};

const scaleImagesDownload = {
 'Method_1': 'https://uploads-ssl.webflow.com/632c2ca7090891667181cf26/648b2f800c890eca5333b5a5_Method%20scale%20-%201.png',
    'Method_2': 'https://uploads-ssl.webflow.com/632c2ca7090891667181cf26/648b2f80eae65e4f4f686791_Method%20scale%20-%202.png',
    'Method_3': 'https://uploads-ssl.webflow.com/632c2ca7090891667181cf26/648b2f80e0080c049206beab_Method%20scale%20-%203.png',
    'Method_4': 'https://uploads-ssl.webflow.com/632c2ca7090891667181cf26/648b2f8016fb32e34c79ac21_Method%20scale%20-%204.png',
    'Goal_1': 'https://uploads-ssl.webflow.com/632c2ca7090891667181cf26/648b2f80c5af8e24a6059f9e_Goal%20scale%20-%201.png',
    'Goal_2': 'https://uploads-ssl.webflow.com/632c2ca7090891667181cf26/648b2f809ae17020347d5eda_Goal%20scale%20-%202.png',
    'Goal_3': 'https://uploads-ssl.webflow.com/632c2ca7090891667181cf26/648b2f80679f46e41b686eb2_Goal%20scale%20-%203.png',
    'Goal_4': 'https://uploads-ssl.webflow.com/632c2ca7090891667181cf26/648b2f811b547765a4767588_Goal%20scale%20-%204.png',
    'Governance_1': 'https://uploads-ssl.webflow.com/632c2ca7090891667181cf26/648b2f807eb9e2e34db8e9d0_Governance%20scale%20-%201.png',
    'Governance_2': 'https://uploads-ssl.webflow.com/632c2ca7090891667181cf26/648b2f80eae65e4f4f68672e_Governance%20scale%20-%202.png',
    'Governance_3': 'https://uploads-ssl.webflow.com/632c2ca7090891667181cf26/648b2f7fb8de82a85ac1f63e_Governance%20scale%20-%203.png',
    'Governance_4': 'https://uploads-ssl.webflow.com/632c2ca7090891667181cf26/648b2f7fcd43c779282f097f_Governance%20scale%20-%204.png',
    'Theming_1': 'https://uploads-ssl.webflow.com/632c2ca7090891667181cf26/64882dc9f09f9a5dc0eff4a8_Theming%20scale%20-%201.png',
    'Theming_2': 'https://uploads-ssl.webflow.com/632c2ca7090891667181cf26/64882dc9e4ef83725195e479_Theming%20scale%20-%202.png',
    'Theming_3': 'https://uploads-ssl.webflow.com/632c2ca7090891667181cf26/64882dc939271ad86477d7ac_Theming%20scale%20-%203.png',
    'Theming_4': 'https://uploads-ssl.webflow.com/632c2ca7090891667181cf26/64882dc968306a304625f6c3_Theming%20scale%20-%204.png',
    'Structure_1': 'https://uploads-ssl.webflow.com/632c2ca7090891667181cf26/64882dc958f99ec8f886fe8f_Structure%20scale%20-%201.png',
    'Structure_2': 'https://uploads-ssl.webflow.com/632c2ca7090891667181cf26/64882dc9e4ef83725195e496_Structure%20scale%20-%202.png',
    'Structure_3': 'https://uploads-ssl.webflow.com/632c2ca7090891667181cf26/64882dc910b6f4115b35412e_Structure%20scale%20-%203.png',
    'Structure_4': 'https://uploads-ssl.webflow.com/632c2ca7090891667181cf26/64882dc96d32503178f29602_Structure%20scale%20-%204.png',
    'Focus_1': 'https://uploads-ssl.webflow.com/632c2ca7090891667181cf26/64882dcaa48a45742eec2e0b_Focus%20scale%20-%201.png',
    'Focus_2': 'https://uploads-ssl.webflow.com/632c2ca7090891667181cf26/64882dc986e34d3ea725bd3a_Focus%20scale%20-%202.png',
		'Focus_3': 'https://uploads-ssl.webflow.com/632c2ca7090891667181cf26/64882dc987a0ae9e52f6696c_Focus%20scale%20-%203.png',
		'Focus_4': 'https://uploads-ssl.webflow.com/632c2ca7090891667181cf26/64882dc99978b2afdce1bb97_Focus%20scale%20-%204.png'
	};


const scaleImages = {
 'Method_1': 'https://uploads-ssl.webflow.com/632c2ca7090891667181cf26/648ab05f6bfa922f5c51de11_Method%20scale%201.png',
    'Method_2': 'https://uploads-ssl.webflow.com/632c2ca7090891667181cf26/648ab05f8a28f40a2a9433a1_Method%20scale%202.png',
    'Method_3': 'https://uploads-ssl.webflow.com/632c2ca7090891667181cf26/648ab05f01cd6f265bf4b706_Method%20scale%203.png',
    'Method_4': 'https://uploads-ssl.webflow.com/632c2ca7090891667181cf26/648ab05f8a28f40a2a943376_Method%20scale%204.png',
    'Goal_1': 'https://uploads-ssl.webflow.com/632c2ca7090891667181cf26/648ab05f67378a0b048af4c9_Goal%20scale%201.png',
    'Goal_2': 'https://uploads-ssl.webflow.com/632c2ca7090891667181cf26/648ab060a9f037e57823ba79_Goal%20scale%202.png',
    'Goal_3': 'https://uploads-ssl.webflow.com/632c2ca7090891667181cf26/648ab05f24d7794b989ce096_Goal%20scale%203.png',
    'Goal_4': 'https://uploads-ssl.webflow.com/632c2ca7090891667181cf26/648ab05f9e2d83664c40070e_Goal%20scale%204.png',
    'Governance_1': 'https://uploads-ssl.webflow.com/632c2ca7090891667181cf26/648b2fa818a5112f93f2097d_Governance%20scale%201.png',
    'Governance_2': 'https://uploads-ssl.webflow.com/632c2ca7090891667181cf26/648b2fa81b547765a476a7b5_Governance%20scale%202.png',
    'Governance_3': 'https://uploads-ssl.webflow.com/632c2ca7090891667181cf26/648b2fa8d5f4e1559d3c21d2_Governance%20scale%203.png',
    'Governance_4': 'https://uploads-ssl.webflow.com/632c2ca7090891667181cf26/648b2fa80d6bdaa27503d6c2_Governance%20scale%204.png',
    'Theming_1': 'https://uploads-ssl.webflow.com/632c2ca7090891667181cf26/648ab0597e26ec08fc04c843_Theming%20scale%201.png',
    'Theming_2': 'https://uploads-ssl.webflow.com/632c2ca7090891667181cf26/648ab059ac16ce58b7bf177a_Theming%20scale%202.png',
    'Theming_3': 'https://uploads-ssl.webflow.com/632c2ca7090891667181cf26/648ab0592ab1776a4ae02372_Theming%20scale%203.png',
    'Theming_4': 'https://uploads-ssl.webflow.com/632c2ca7090891667181cf26/648ab0537e26ec08fc04c451_Theming%20scale%204.png',
    'Structure_1': 'https://uploads-ssl.webflow.com/632c2ca7090891667181cf26/648ab05f5726afd6e4aeecb6_Structure%20scale%201.png',
    'Structure_2': 'https://uploads-ssl.webflow.com/632c2ca7090891667181cf26/648ab05f0d85962f59278748_Structure%20scale%202.png',
    'Structure_3': 'https://uploads-ssl.webflow.com/632c2ca7090891667181cf26/648ab05f2ab1776a4ae02917_Structure%20scale%203.png',
    'Structure_4': 'https://uploads-ssl.webflow.com/632c2ca7090891667181cf26/648ab05f3377a682ffef09cc_Structure%20scale%204.png',
    'Focus_1': 'https://uploads-ssl.webflow.com/632c2ca7090891667181cf26/648ab060a9f037e57823bb9d_Focus%20scale%201.png',
    'Focus_2': 'https://uploads-ssl.webflow.com/632c2ca7090891667181cf26/648ab060b532774e5c25c860_Focus%20scale%202.png',
		'Focus_3': 'https://uploads-ssl.webflow.com/632c2ca7090891667181cf26/648ab060eb8ed148bd87d8dc_Focus%20scale%203.png',
		'Focus_4': 'https://uploads-ssl.webflow.com/632c2ca7090891667181cf26/648ab06093490a62099b0fd2_Focus%20scale%204.png'
	};

function getURLParams() {
  const params = new URLSearchParams(window.location.search);
  const answers = {};

  for (const key of params.keys()) {
    const answer = decodeURIComponent(params.get(key));
    answers[key] = answer;
  }

  return answers;
}

function calculateScaleResults(answers) {
  const scaleResults = {};

  for (const scale in scaleMappings) {
    const questionKeys = Object.keys(questionToScaleMappings).filter(key => questionToScaleMappings[key] === scale);
    const resultRanges = scaleMappings[scale];

    let values = [];
    for (let i = 0; i < resultRanges.length; i++) {
      const range = resultRanges[i];
      const scaleValue = getScaleValue(answers[questionKeys[i]], range);
      console.log('Value scale:', scaleValue);
      values.push(scaleValue);
    }

    if (scale === 'Goal') {
  const ghostQuestionKeys = ['q1', 'q2', 'q3'];
  const reversedGhostValues = [];

  for (let x = 0; x < 3; x++) {
    const ghostValue = getScaleValue(answers[ghostQuestionKeys[x]], scaleMappings['Method'][x]);
    const reversedGhostValue = 5 - ghostValue;  // Reversing the value by subtracting it from 5
    reversedGhostValues.push(reversedGhostValue);
  }

  values = values.concat(reversedGhostValues);
}



    const average = calculateAverage(values);
    scaleResults[scale] = {
      'average': average,
      'image': scaleImages[`${scale}_${average}`],
      'downloadImage': scaleImagesDownload[`${scale}_${average}`]
    };
  }

  return scaleResults;
}



function getScaleValue(answer, resultRanges) {
  const valueMapping = {
    'Agree': 1,
    'Somewhat Agree': 2,
    'Somewhat Disagree': 3,
    'Disagree': 4
  };

  if (resultRanges === '4-1') {
    const reversedMapping = {
      1: 4,
      2: 3,
      3: 2,
      4: 1
    };
    return reversedMapping[valueMapping[answer]];
  }

  return valueMapping[answer];
}

function calculateAverage(values) {
  const sum = values.reduce((total, value) => total + value, 0);
  const average = sum / values.length;

  // Apply the new weighting system
  if (average <= 1.9) {
    return 1; // Weight to 1
  } else if (average <= 2.5) {
    return 2; // Weight to 2
  } else if (average <= 3.1) {
    return 3; // Weight to 3
  } else {
    return 4; // Weight to 4
  }
}

function calculateArchetype(scaleResults) {
  let scores = {
    Rocket: 0,
    Shield: 0,
    Kite: 0,
    Compass: 0
  };

 // Main Objective (Goal)
  if (scaleResults.Goal.average === 1) {
    scores.Shield += 2;
    scores.Rocket -= 2;
    scores.Compass -= 1;
  } else if (scaleResults.Goal.average === 2) {
    scores.Shield += 1;
    scores.Rocket -= 1;
    scores.Compass += 1;
  } else if (scaleResults.Goal.average === 3) {
    scores.Rocket += 1;
    scores.Shield -= 1;
    scores.Compass += 1;
  } else if (scaleResults.Goal.average === 4) {
    scores.Rocket += 2;
    scores.Shield -= 2;
    scores.Compass -= 1;
  }

  // Deliverables (Method)
  if (scaleResults.Method.average === 1) {
    scores.Rocket += 2;
    scores.Shield -= 2;
    scores.Compass -= 1;
  } else if (scaleResults.Method.average === 2) {
    scores.Rocket += 1;
    scores.Shield -= 1;
    scores.Compass += 1;
  } else if (scaleResults.Method.average === 3) {
    scores.Shield += 1;
    scores.Rocket -= 1;
    scores.Compass += 1;
  } else if (scaleResults.Method.average === 4) {
    scores.Shield += 2;
    scores.Rocket -= 2;
    scores.Compass -= 1;
  }

  // Theming
  scores.Kite += scaleResults.Theming.average - 1;

  // Governance
  if (scaleResults.Governance.average <= 2) {
    // Strong central governance (no changes) 
  } else if (scaleResults.Governance.average === 3) {
    scores.Kite += 1;
  } else if (scaleResults.Governance.average === 4) {
    scores.Kite += 2; 
  }

  // Structure
  if (scaleResults.Structure.average === 1) {
    scores.Compass += 1;
  } 

  // Focus
  if (scaleResults.Focus.average === 1) {
    scores.Rocket += 2;
    scores.Shield -= 2;
    scores.Compass -= 1;
  } else if (scaleResults.Focus.average === 2) {
    scores.Rocket += 1;
    scores.Shield -= 1;
    scores.Compass += 1;
  } else if (scaleResults.Focus.average === 3) {
    scores.Shield += 1;
    scores.Rocket -= 1;
    scores.Compass += 1;
  } else if (scaleResults.Focus.average === 4) {
    scores.Shield += 2;
    scores.Rocket -= 2;
    scores.Compass -= 1;
  }


  // Determine highest score
  let highestScore = Math.max(...Object.values(scores));
  let archetypes = Object.keys(scores).filter(key => scores[key] === highestScore);

  // Handle tied situations
  if (archetypes.length > 1) {
    if ((archetypes.includes('Rocket') || archetypes.includes('Shield')) && highestScore >= 3) {
      // If tied with Rocket or Shield and they are 3 or more, pick the tied one
      archetypes = archetypes.filter(archetype => archetype === 'Rocket' || archetype === 'Shield');
    } else if (archetypes.includes('Compass')) {
      // If tied with Compass, pick the other options
      archetypes = archetypes.filter(archetype => archetype !== 'Compass');
    }
  }
  console.log("Chosen Archetype:", archetypes[0]);
  console.log("Scores:", scores); 


  return archetypes; // This could be multiple if there's a tie
}

function displayArchetypeDiv(archetype) {
    console.log("Attempting to display archetype:", archetype);

    // Hide all archetype divs initially
    const archetypeDivs = ['Rocket', 'Shield', 'Kite', 'Compass'];
    archetypeDivs.forEach(divId => {
        const div = document.getElementById(divId);
        if (div) {
            div.style.display = 'none';
        } else {
            console.log("Div not found for:", divId);
        }
    });

    // Display the correct archetype div
    const div = document.getElementById(archetype);
    if (div) {
        div.style.display = 'block';
        console.log("Displayed div for archetype:", archetype);
    } else {
        console.log("Failed to display div for archetype:", archetype);
        console.error("Check if the div ID exists and matches the specified ID in the HTML.");
    }
}




document.addEventListener('DOMContentLoaded', function() {
  const answers = getURLParams();
  const scaleResults = calculateScaleResults(answers);

  const goalScaleElement = document.getElementById('goal-scale');
  goalScaleElement.src = scaleResults['Goal']['image'];

  const methodScaleElement = document.getElementById('method-scale');
  methodScaleElement.src = scaleResults['Method']['image'];

  const themingScaleElement = document.getElementById('theming-scale');
  themingScaleElement.src = scaleResults['Theming']['image'];

  const governanceScaleElement = document.getElementById('governance-scale');
  governanceScaleElement.src = scaleResults['Governance']['image'];

  const structureScaleElement = document.getElementById('structure-scale');
  structureScaleElement.src = scaleResults['Structure']['image'];

  const focusScaleElement = document.getElementById('focus-scale');
  focusScaleElement.src = scaleResults['Focus']['image'];
 
  const chosenArchetypes = calculateArchetype(scaleResults);
  console.log("Chosen Archetype:", chosenArchetypes);
    displayArchetypeDiv(chosenArchetypes[0]);


  document.getElementById('results').style.display = 'block';
});

function downloadResults() {
  const { jsPDF } = window.jspdf;
  const doc = new jsPDF();
  doc.setFillColor('#040a1e');
  doc.rect(0, 0, doc.internal.pageSize.getWidth(), doc.internal.pageSize.getHeight(), 'F');
  const answers = getURLParams();

  const scaleResults = calculateScaleResults(answers);

  const goalScaleUrl = scaleResults['Goal']['downloadImage'];
  const methodScaleUrl = scaleResults['Method']['downloadImage'];
  const themingScaleUrl = scaleResults['Theming']['downloadImage'];
  const governanceScaleUrl = scaleResults['Governance']['downloadImage'];
  const structureScaleUrl = scaleResults['Structure']['downloadImage'];
  const focusScaleUrl = scaleResults['Focus']['downloadImage'];

  const chosenArchetype = calculateArchetype(scaleResults); // Assume this returns the dominant archetype

  // URLs for the archetype excerpts
  const archetypeExcerptUrls = {
    Rocket: 'https://uploads-ssl.webflow.com/632c2ca7090891667181cf26/6631029b7f29c5f78fce8f72_Rocket.png',
    Shield: 'https://uploads-ssl.webflow.com/632c2ca7090891667181cf26/6631029b958e603526dc8e6e_Shield.png',
    Kite: 'https://uploads-ssl.webflow.com/632c2ca7090891667181cf26/6631029bec0a9df042e50e42_Kite.png',
    Compass: 'https://uploads-ssl.webflow.com/632c2ca7090891667181cf26/6631029b8246134c7eed5b8b_Compass.png'
  };
  const archetypeExcerptImage = archetypeExcerptUrls[chosenArchetype];

  // Set Y-positions based on the elements in the screenshot
  const startY = 25; // Example starting position

  // Adding the archetype excerpt image at the bottom
  doc.addImage(archetypeExcerptImage, 'PNG', 15, startY, doc.internal.pageSize.getWidth() - 120, 0);

  const logoImageUrl = 'https://uploads-ssl.webflow.com/632c2ca7090891667181cf26/64897d518a6b10a15a478907_logo.png';
  const logoImageWidth = 40;
  doc.addImage(logoImageUrl, 'PNG', 15, 15, logoImageWidth, 0);

  const imageWidth = 180;
  const imageHeight = 0;
  const pageWidth = doc.internal.pageSize.getWidth();
  const x = (pageWidth - imageWidth) / 2;
  const scaleGap = 27.5;

  doc.addImage(goalScaleUrl, 'PNG', x, 100, imageWidth, imageHeight);
  doc.addImage(methodScaleUrl, 'PNG', x, 100 + imageHeight + scaleGap, imageWidth, imageHeight);
  doc.addImage(themingScaleUrl, 'PNG', x, 100 + 2 * (imageHeight + scaleGap), imageWidth, imageHeight);
  doc.addImage(governanceScaleUrl, 'PNG', x, 100 + 3 * (imageHeight + scaleGap), imageWidth, imageHeight);
  doc.addImage(structureScaleUrl, 'PNG', x, 100 + 4 * (imageHeight + scaleGap), imageWidth, imageHeight);
  doc.addImage(focusScaleUrl, 'PNG', x, 100 + 5 * (imageHeight + scaleGap), imageWidth, imageHeight);

  const learnTestButtonUrl = 'https://uploads-ssl.webflow.com/632c2ca7090891667181cf26/648acc636853962bcd6aced0_learn-button.png';
  const learnTestButtonWidth = 30;
  const learnTestButtonX = (doc.internal.pageSize.getWidth() /2) + 5;
  const learnTestButtonY = doc.internal.pageSize.getHeight() - 30;
  doc.addImage(learnTestButtonUrl, 'PNG', learnTestButtonX, learnTestButtonY, learnTestButtonWidth, 10);

  const linkUrl = 'https://www.supernova.io/blog/introducing-the-design-system-mapping-tool-aligning-and-elevating-your-design-system';
  doc.link(learnTestButtonX, learnTestButtonY, learnTestButtonWidth, 10, { url: linkUrl });

  const shareTestButtonUrl = 'https://uploads-ssl.webflow.com/632c2ca7090891667181cf26/648acd4a4571f61b4ddb0e27_share-twitter-button.png';
  const shareTestButtonWidth = 35;
  const shareTestButtonX = (doc.internal.pageSize.getWidth() /2) - shareTestButtonWidth - 5;
  const shareTestButtonY = doc.internal.pageSize.getHeight() - 30;
  doc.addImage(shareTestButtonUrl, 'PNG', shareTestButtonX, shareTestButtonY, shareTestButtonWidth, 10);

  const linkUrl2 = 'https://twitter.com/intent/tweet?text=Just%20finished%20taking%20the%20Design%20System%20Mapping%20Test!%20Try%20it%20yourself:%20%5Bhttps%3A%2F%2Fsupernova.io%2Fdesign-system-mapping-tool%5D%20%23DesignSystems';
  doc.link(shareTestButtonX, shareTestButtonY, shareTestButtonWidth, 10, { url: linkUrl2 });


  const logoLinkBoxX = 15;
  const logoLinkBoxY = 15;
  const logoLinkBoxWidth = logoImageWidth;
  const logoLinkBoxHeight = 10;
  doc.link(logoLinkBoxX, logoLinkBoxY, logoLinkBoxWidth, logoLinkBoxHeight, { url: 'https://www.supernova.io' });

  doc.save('scales.pdf');
}

const downloadButton = document.getElementById('download-button');
downloadButton.addEventListener('click', downloadResults);

