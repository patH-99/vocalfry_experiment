/************************** 
 * Creaky_Experiment *
 **************************/

import { core, data, sound, util, visual, hardware } from './lib/psychojs-2026.1.3.js';
const { PsychoJS } = core;
const { TrialHandler, MultiStairHandler } = data;
const { Scheduler } = util;
//some handy aliases as in the psychopy scripts;
const { abs, sin, cos, PI: pi, sqrt } = Math;
const { round } = util;


// store info about the experiment session:
let expName = 'creaky_experiment';  // from the Builder filename that created this script
let expInfo = {
    'participant': `${util.pad(Number.parseFloat(util.randint(0, 999999)).toFixed(0), 6)}`,
};
let PILOTING = util.getUrlParameters().has('__pilotToken');

// Start code blocks for 'Before Experiment'
// init psychoJS:
const psychoJS = new PsychoJS({
  debug: true
});

// open window:
psychoJS.openWindow({
  fullscr: true,
  color: new util.Color('black'),
  units: 'height',
  waitBlanking: true,
  backgroundImage: '',
  backgroundFit: 'none',
});
// schedule the experiment:
psychoJS.schedule(psychoJS.gui.DlgFromDict({
  dictionary: expInfo,
  title: expName
}));

const flowScheduler = new Scheduler(psychoJS);
const dialogCancelScheduler = new Scheduler(psychoJS);
psychoJS.scheduleCondition(function() { return (psychoJS.gui.dialogComponent.button === 'OK'); },flowScheduler, dialogCancelScheduler);

// flowScheduler gets run if the participants presses OK
flowScheduler.add(updateInfo); // add timeStamp
flowScheduler.add(experimentInit);
flowScheduler.add(welcomeRoutineRoutineBegin());
flowScheduler.add(welcomeRoutineRoutineEachFrame());
flowScheduler.add(welcomeRoutineRoutineEnd());
const introLoopLoopScheduler = new Scheduler(psychoJS);
flowScheduler.add(introLoopLoopBegin(introLoopLoopScheduler));
flowScheduler.add(introLoopLoopScheduler);
flowScheduler.add(introLoopLoopEnd);


flowScheduler.add(trainingRoutineRoutineBegin());
flowScheduler.add(trainingRoutineRoutineEachFrame());
flowScheduler.add(trainingRoutineRoutineEnd());
const trainingLoopLoopScheduler = new Scheduler(psychoJS);
flowScheduler.add(trainingLoopLoopBegin(trainingLoopLoopScheduler));
flowScheduler.add(trainingLoopLoopScheduler);
flowScheduler.add(trainingLoopLoopEnd);


flowScheduler.add(mainRoutineRoutineBegin());
flowScheduler.add(mainRoutineRoutineEachFrame());
flowScheduler.add(mainRoutineRoutineEnd());
const mainLoopLoopScheduler = new Scheduler(psychoJS);
flowScheduler.add(mainLoopLoopBegin(mainLoopLoopScheduler));
flowScheduler.add(mainLoopLoopScheduler);
flowScheduler.add(mainLoopLoopEnd);



flowScheduler.add(surveyRoutineRoutineBegin());
flowScheduler.add(surveyRoutineRoutineEachFrame());
flowScheduler.add(surveyRoutineRoutineEnd());
flowScheduler.add(thankYouScreenRoutineBegin());
flowScheduler.add(thankYouScreenRoutineEachFrame());
flowScheduler.add(thankYouScreenRoutineEnd());
flowScheduler.add(quitPsychoJS, 'Thank you for your patience.', true);

// quit if user presses Cancel in dialog box:
dialogCancelScheduler.add(quitPsychoJS, 'Thank you for your patience.', false);

psychoJS.start({
  expName: expName,
  expInfo: expInfo,
  resources: [
    // resources:
    {'name': 'conditions/introduction.xlsx', 'path': 'conditions/introduction.xlsx'},
    {'name': 'introductory_stimuli/creak_f_1.wav', 'path': 'introductory_stimuli/creak_f_1.wav'},
    {'name': 'introductory_stimuli/creak_m_1.wav', 'path': 'introductory_stimuli/creak_m_1.wav'},
    {'name': 'introductory_stimuli/creak_f_2.wav', 'path': 'introductory_stimuli/creak_f_2.wav'},
    {'name': 'introductory_stimuli/creak_m_2.wav', 'path': 'introductory_stimuli/creak_m_2.wav'},
    {'name': 'introductory_stimuli/creak_f_3.wav', 'path': 'introductory_stimuli/creak_f_3.wav'},
    {'name': 'introductory_stimuli/creak_m_3.wav', 'path': 'introductory_stimuli/creak_m_3.wav'},
    {'name': 'conditions/training.xlsx', 'path': 'conditions/training.xlsx'},
    {'name': 'training_stimuli/chat_modal.wav', 'path': 'training_stimuli/chat_modal.wav'},
    {'name': 'training_stimuli/chat_creaky.wav', 'path': 'training_stimuli/chat_creaky.wav'},
    {'name': 'training_stimuli/vap_creaky.wav', 'path': 'training_stimuli/vap_creaky.wav'},
    {'name': 'training_stimuli/vap_modal.wav', 'path': 'training_stimuli/vap_modal.wav'},
    {'name': 'training_stimuli/hun_creaky.wav', 'path': 'training_stimuli/hun_creaky.wav'},
    {'name': 'training_stimuli/hun_modal.wav', 'path': 'training_stimuli/hun_modal.wav'},
    {'name': 'training_stimuli/jap_modal.wav', 'path': 'training_stimuli/jap_modal.wav'},
    {'name': 'training_stimuli/jap_creaky.wav', 'path': 'training_stimuli/jap_creaky.wav'},
    {'name': 'training_stimuli/zat_modal.wav', 'path': 'training_stimuli/zat_modal.wav'},
    {'name': 'training_stimuli/zat_creaky.wav', 'path': 'training_stimuli/zat_creaky.wav'},
    {'name': 'training_stimuli/vop_modal.wav', 'path': 'training_stimuli/vop_modal.wav'},
    {'name': 'training_stimuli/vop_creaky.wav', 'path': 'training_stimuli/vop_creaky.wav'},
    {'name': 'training_stimuli/jat_creaky.wav', 'path': 'training_stimuli/jat_creaky.wav'},
    {'name': 'training_stimuli/jat_modal.wav', 'path': 'training_stimuli/jat_modal.wav'},
    {'name': 'training_stimuli/vak_creaky.wav', 'path': 'training_stimuli/vak_creaky.wav'},
    {'name': 'training_stimuli/vak_modal.wav', 'path': 'training_stimuli/vak_modal.wav'},
    {'name': 'conditions/stimuli.xlsx', 'path': 'conditions/stimuli.xlsx'},
    {'name': 'stimuli/hab_f_c-1_p0_h-2_r3.wav', 'path': 'stimuli/hab_f_c-1_p0_h-2_r3.wav'},
    {'name': 'stimuli/hab_f_c-1_p3_h-3_r3.wav', 'path': 'stimuli/hab_f_c-1_p3_h-3_r3.wav'},
    {'name': 'stimuli/hab_f_c0_p-2_h-2_r1.wav', 'path': 'stimuli/hab_f_c0_p-2_h-2_r1.wav'},
    {'name': 'stimuli/hab_f_c0_p3_h3_r3.wav', 'path': 'stimuli/hab_f_c0_p3_h3_r3.wav'},
    {'name': 'stimuli/hab_f_c1_p-3_h0_r1.wav', 'path': 'stimuli/hab_f_c1_p-3_h0_r1.wav'},
    {'name': 'stimuli/hab_f_c1_p-3_h1_r2.wav', 'path': 'stimuli/hab_f_c1_p-3_h1_r2.wav'},
    {'name': 'stimuli/hab_f_c1_p1_h2_r2.wav', 'path': 'stimuli/hab_f_c1_p1_h2_r2.wav'},
    {'name': 'stimuli/hab_f_c2_p-1_h2_r3.wav', 'path': 'stimuli/hab_f_c2_p-1_h2_r3.wav'},
    {'name': 'stimuli/hab_f_c2_p2_h0_r1.wav', 'path': 'stimuli/hab_f_c2_p2_h0_r1.wav'},
    {'name': 'stimuli/hab_f_c2_p3_h-2_r3.wav', 'path': 'stimuli/hab_f_c2_p3_h-2_r3.wav'},
    {'name': 'stimuli/hab_f_c2_p3_h1_r2.wav', 'path': 'stimuli/hab_f_c2_p3_h1_r2.wav'},
    {'name': 'stimuli/hab_m_c-1_p-3_h-3_r2.wav', 'path': 'stimuli/hab_m_c-1_p-3_h-3_r2.wav'},
    {'name': 'stimuli/hab_m_c-1_p-3_h-3_r3.wav', 'path': 'stimuli/hab_m_c-1_p-3_h-3_r3.wav'},
    {'name': 'stimuli/hab_m_c-1_p0_h-1_r2.wav', 'path': 'stimuli/hab_m_c-1_p0_h-1_r2.wav'},
    {'name': 'stimuli/hab_m_c-1_p0_h-3_r2.wav', 'path': 'stimuli/hab_m_c-1_p0_h-3_r2.wav'},
    {'name': 'stimuli/hab_m_c-1_p2_h-2_r2.wav', 'path': 'stimuli/hab_m_c-1_p2_h-2_r2.wav'},
    {'name': 'stimuli/hab_m_c0_p1_h3_r2.wav', 'path': 'stimuli/hab_m_c0_p1_h3_r2.wav'},
    {'name': 'stimuli/hab_m_c0_p2_h1_r2.wav', 'path': 'stimuli/hab_m_c0_p2_h1_r2.wav'},
    {'name': 'stimuli/hab_m_c1_p-1_h-1_r2.wav', 'path': 'stimuli/hab_m_c1_p-1_h-1_r2.wav'},
    {'name': 'stimuli/hab_m_c1_p1_h1_r2.wav', 'path': 'stimuli/hab_m_c1_p1_h1_r2.wav'},
    {'name': 'stimuli/hab_m_c2_p3_h-2_r3.wav', 'path': 'stimuli/hab_m_c2_p3_h-2_r3.wav'},
    {'name': 'stimuli/hab_m_c2_p3_h-3_r3.wav', 'path': 'stimuli/hab_m_c2_p3_h-3_r3.wav'},
    {'name': 'stimuli/had_f_c-1_p-2_h-3_r1.wav', 'path': 'stimuli/had_f_c-1_p-2_h-3_r1.wav'},
    {'name': 'stimuli/had_f_c-1_p0_h-3_r2.wav', 'path': 'stimuli/had_f_c-1_p0_h-3_r2.wav'},
    {'name': 'stimuli/had_f_c0_p-2_h-1_r1.wav', 'path': 'stimuli/had_f_c0_p-2_h-1_r1.wav'},
    {'name': 'stimuli/had_f_c0_p-2_h0_r1.wav', 'path': 'stimuli/had_f_c0_p-2_h0_r1.wav'},
    {'name': 'stimuli/had_f_c0_p3_h-1_r2.wav', 'path': 'stimuli/had_f_c0_p3_h-1_r2.wav'},
    {'name': 'stimuli/had_f_c1_p-2_h3_r2.wav', 'path': 'stimuli/had_f_c1_p-2_h3_r2.wav'},
    {'name': 'stimuli/had_f_c1_p-3_h3_r1.wav', 'path': 'stimuli/had_f_c1_p-3_h3_r1.wav'},
    {'name': 'stimuli/had_f_c1_p2_h-3_r3.wav', 'path': 'stimuli/had_f_c1_p2_h-3_r3.wav'},
    {'name': 'stimuli/had_f_c1_p2_h1_r2.wav', 'path': 'stimuli/had_f_c1_p2_h1_r2.wav'},
    {'name': 'stimuli/had_f_c2_p-3_h0_r3.wav', 'path': 'stimuli/had_f_c2_p-3_h0_r3.wav'},
    {'name': 'stimuli/had_f_c2_p3_h1_r2.wav', 'path': 'stimuli/had_f_c2_p3_h1_r2.wav'},
    {'name': 'stimuli/had_m_c-1_p1_h-1_r1.wav', 'path': 'stimuli/had_m_c-1_p1_h-1_r1.wav'},
    {'name': 'stimuli/had_m_c-1_p3_h3_r1.wav', 'path': 'stimuli/had_m_c-1_p3_h3_r1.wav'},
    {'name': 'stimuli/had_m_c-2_p-1_h2_r1.wav', 'path': 'stimuli/had_m_c-2_p-1_h2_r1.wav'},
    {'name': 'stimuli/had_m_c-2_p-2_h2_r1.wav', 'path': 'stimuli/had_m_c-2_p-2_h2_r1.wav'},
    {'name': 'stimuli/had_m_c-2_p-3_h-2_r3.wav', 'path': 'stimuli/had_m_c-2_p-3_h-2_r3.wav'},
    {'name': 'stimuli/had_m_c-2_p3_h-1_r3.wav', 'path': 'stimuli/had_m_c-2_p3_h-1_r3.wav'},
    {'name': 'stimuli/had_m_c0_p3_h3_r2.wav', 'path': 'stimuli/had_m_c0_p3_h3_r2.wav'},
    {'name': 'stimuli/had_m_c1_p-1_h0_r1.wav', 'path': 'stimuli/had_m_c1_p-1_h0_r1.wav'},
    {'name': 'stimuli/had_m_c1_p0_h3_r1.wav', 'path': 'stimuli/had_m_c1_p0_h3_r1.wav'},
    {'name': 'stimuli/had_m_c1_p1_h3_r2.wav', 'path': 'stimuli/had_m_c1_p1_h3_r2.wav'},
    {'name': 'stimuli/had_m_c2_p-3_h3_r2.wav', 'path': 'stimuli/had_m_c2_p-3_h3_r2.wav'},
    {'name': 'stimuli/tab_f_c-1_p-3_h-3_r1.wav', 'path': 'stimuli/tab_f_c-1_p-3_h-3_r1.wav'},
    {'name': 'stimuli/tab_f_c0_p-2_h-1_r2.wav', 'path': 'stimuli/tab_f_c0_p-2_h-1_r2.wav'},
    {'name': 'stimuli/tab_f_c0_p-2_h0_r1.wav', 'path': 'stimuli/tab_f_c0_p-2_h0_r1.wav'},
    {'name': 'stimuli/tab_f_c0_p-2_h1_r3.wav', 'path': 'stimuli/tab_f_c0_p-2_h1_r3.wav'},
    {'name': 'stimuli/tab_f_c0_p-3_h-1_r3.wav', 'path': 'stimuli/tab_f_c0_p-3_h-1_r3.wav'},
    {'name': 'stimuli/tab_f_c0_p0_h-3_r2.wav', 'path': 'stimuli/tab_f_c0_p0_h-3_r2.wav'},
    {'name': 'stimuli/tab_f_c1_p2_h1_r1.wav', 'path': 'stimuli/tab_f_c1_p2_h1_r1.wav'},
    {'name': 'stimuli/tab_f_c1_p3_h-2_r2.wav', 'path': 'stimuli/tab_f_c1_p3_h-2_r2.wav'},
    {'name': 'stimuli/tab_f_c2_p-1_h1_r1.wav', 'path': 'stimuli/tab_f_c2_p-1_h1_r1.wav'},
    {'name': 'stimuli/tab_f_c2_p3_h0_r1.wav', 'path': 'stimuli/tab_f_c2_p3_h0_r1.wav'},
    {'name': 'stimuli/tab_f_c2_p3_h2_r2.wav', 'path': 'stimuli/tab_f_c2_p3_h2_r2.wav'},
    {'name': 'stimuli/tab_m_c-1_p0_h-3_r2.wav', 'path': 'stimuli/tab_m_c-1_p0_h-3_r2.wav'},
    {'name': 'stimuli/tab_m_c-1_p2_h-1_r2.wav', 'path': 'stimuli/tab_m_c-1_p2_h-1_r2.wav'},
    {'name': 'stimuli/tab_m_c-2_p-1_h2_r2.wav', 'path': 'stimuli/tab_m_c-2_p-1_h2_r2.wav'},
    {'name': 'stimuli/tab_m_c-2_p1_h0_r1.wav', 'path': 'stimuli/tab_m_c-2_p1_h0_r1.wav'},
    {'name': 'stimuli/tab_m_c0_p-2_h-1_r3.wav', 'path': 'stimuli/tab_m_c0_p-2_h-1_r3.wav'},
    {'name': 'stimuli/tab_m_c0_p1_h-3_r2.wav', 'path': 'stimuli/tab_m_c0_p1_h-3_r2.wav'},
    {'name': 'stimuli/tab_m_c0_p3_h3_r2.wav', 'path': 'stimuli/tab_m_c0_p3_h3_r2.wav'},
    {'name': 'stimuli/tab_m_c1_p-2_h-3_r3.wav', 'path': 'stimuli/tab_m_c1_p-2_h-3_r3.wav'},
    {'name': 'stimuli/tab_m_c1_p0_h-2_r3.wav', 'path': 'stimuli/tab_m_c1_p0_h-2_r3.wav'},
    {'name': 'stimuli/tab_m_c1_p0_h3_r1.wav', 'path': 'stimuli/tab_m_c1_p0_h3_r1.wav'},
    {'name': 'stimuli/tab_m_c2_p2_h0_r3.wav', 'path': 'stimuli/tab_m_c2_p2_h0_r3.wav'},
    {'name': 'stimuli/tad_f_c-1_p-3_h-1_r1.wav', 'path': 'stimuli/tad_f_c-1_p-3_h-1_r1.wav'},
    {'name': 'stimuli/tad_f_c0_p-1_h-3_r3.wav', 'path': 'stimuli/tad_f_c0_p-1_h-3_r3.wav'},
    {'name': 'stimuli/tad_f_c0_p1_h-2_r1.wav', 'path': 'stimuli/tad_f_c0_p1_h-2_r1.wav'},
    {'name': 'stimuli/tad_f_c0_p2_h-2_r1.wav', 'path': 'stimuli/tad_f_c0_p2_h-2_r1.wav'},
    {'name': 'stimuli/tad_f_c0_p2_h-2_r3.wav', 'path': 'stimuli/tad_f_c0_p2_h-2_r3.wav'},
    {'name': 'stimuli/tad_f_c0_p2_h0_r3.wav', 'path': 'stimuli/tad_f_c0_p2_h0_r3.wav'},
    {'name': 'stimuli/tad_f_c1_p-3_h3_r3.wav', 'path': 'stimuli/tad_f_c1_p-3_h3_r3.wav'},
    {'name': 'stimuli/tad_f_c1_p0_h2_r3.wav', 'path': 'stimuli/tad_f_c1_p0_h2_r3.wav'},
    {'name': 'stimuli/tad_f_c1_p1_h3_r1.wav', 'path': 'stimuli/tad_f_c1_p1_h3_r1.wav'},
    {'name': 'stimuli/tad_f_c2_p2_h1_r2.wav', 'path': 'stimuli/tad_f_c2_p2_h1_r2.wav'},
    {'name': 'stimuli/tad_f_c2_p3_h-2_r2.wav', 'path': 'stimuli/tad_f_c2_p3_h-2_r2.wav'},
    {'name': 'stimuli/tad_m_c-2_p-2_h-1_r3.wav', 'path': 'stimuli/tad_m_c-2_p-2_h-1_r3.wav'},
    {'name': 'stimuli/tad_m_c-2_p-3_h-1_r1.wav', 'path': 'stimuli/tad_m_c-2_p-3_h-1_r1.wav'},
    {'name': 'stimuli/tad_m_c-2_p0_h-3_r2.wav', 'path': 'stimuli/tad_m_c-2_p0_h-3_r2.wav'},
    {'name': 'stimuli/tad_m_c-2_p0_h2_r1.wav', 'path': 'stimuli/tad_m_c-2_p0_h2_r1.wav'},
    {'name': 'stimuli/tad_m_c-2_p2_h0_r2.wav', 'path': 'stimuli/tad_m_c-2_p2_h0_r2.wav'},
    {'name': 'stimuli/tad_m_c-2_p3_h-3_r2.wav', 'path': 'stimuli/tad_m_c-2_p3_h-3_r2.wav'},
    {'name': 'stimuli/tad_m_c1_p0_h3_r2.wav', 'path': 'stimuli/tad_m_c1_p0_h3_r2.wav'},
    {'name': 'stimuli/tad_m_c1_p2_h3_r1.wav', 'path': 'stimuli/tad_m_c1_p2_h3_r1.wav'},
    {'name': 'stimuli/tad_m_c1_p3_h2_r3.wav', 'path': 'stimuli/tad_m_c1_p3_h2_r3.wav'},
    {'name': 'stimuli/tad_m_c2_p1_h-3_r2.wav', 'path': 'stimuli/tad_m_c2_p1_h-3_r2.wav'},
    {'name': 'stimuli/tad_m_c2_p1_h2_r2.wav', 'path': 'stimuli/tad_m_c2_p1_h2_r2.wav'},
    {'name': 'conditions/survey.xlsx', 'path': 'conditions/survey.xlsx'},
  ]
});

psychoJS.experimentLogger.setLevel(core.Logger.ServerLevel.INFO);


var currentLoop;
var frameDur;
async function updateInfo() {
  currentLoop = psychoJS.experiment;  // right now there are no loops
  expInfo['date'] = util.MonotonicClock.getDateStr();  // add a simple timestamp
  expInfo['expName'] = expName;
  expInfo['psychopyVersion'] = '2026.1.3';
  expInfo['OS'] = window.navigator.platform;


  // store frame rate of monitor if we can measure it successfully
  expInfo['frameRate'] = psychoJS.window.getActualFrameRate();
  if (typeof expInfo['frameRate'] !== 'undefined')
    frameDur = 1.0 / Math.round(expInfo['frameRate']);
  else
    frameDur = 1.0 / 60.0; // couldn't get a reliable measure so guess

  // add info from the URL:
  util.addInfoFromUrl(expInfo);
  

  
  psychoJS.experiment.dataFileName = (("." + "/") + `data/${expInfo["participant"]}_${expName}_${expInfo["date"]}`);
  psychoJS.experiment.field_separator = '\t';


  return Scheduler.Event.NEXT;
}


var welcomeRoutineClock;
var welcomeText;
var continueBtn;
var introTrialClock;
var introductionText;
var introSound;
var replayBtn;
var continueBtn_2;
var trainingRoutineClock;
var text;
var continueBtn_3;
var trainingTrialClock;
var mouse;
var trainSound;
var binButton;
var trainSlider;
var arrowShape;
var trainLabel;
var feedbackText;
var replayBtn_2;
var continueBtn_4;
var mainRoutineClock;
var mainInstructions;
var continueBtn_6;
var mainTrialClock;
var trialCounter;
var totalTrials;
var mouse_2;
var mainSound;
var binButton_2;
var mainSlider;
var replayBtn_3;
var continueBtn_5;
var trialCounterText;
var breakScreenClock;
var breakText;
var breakContinueButton;
var surveyRoutineClock;
var surveyForm;
var submitBtn;
var thankYouScreenClock;
var thankYouText;
var closeButton;
var globalClock;
var routineTimer;
async function experimentInit() {
  // Initialize components for Routine "welcomeRoutine"
  welcomeRoutineClock = new util.Clock();
  welcomeText = new visual.TextStim({
    win: psychoJS.window,
    name: 'welcomeText',
    text: 'Welcome to the experiment!\n\nIn this study you will listen to short recordings of speech and judge how strongly voices produce vocal fry.\n\nYou will first complete a short introduction and training phase to get familiar with the concept of vocal fry and with the task, followed by the main part of the experiment.\n\nPlease put on your headphones now and make sure the volume is at a comfortable level.',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], draggable: false, height: 0.05,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: 0.0 
  });
  
  continueBtn = new visual.ButtonStim({
    win: psychoJS.window,
    name: 'continueBtn',
    text: 'Continue',
    font: 'Arvo',
    pos: [0, (- 0.4)],
    size: [0.3, 0.08],
    padding: null,
    anchor: 'center',
    ori: 0.0,
    units: psychoJS.window.units,
    color: 'white',
    fillColor: 'darkgrey',
    borderColor: null,
    colorSpace: 'rgb',
    borderWidth: 0.0,
    opacity: null,
    depth: -1,
    letterHeight: 0.05,
    bold: true,
    italic: false,
  });
  continueBtn.clock = new util.Clock();
  
  // Initialize components for Routine "introTrial"
  introTrialClock = new util.Clock();
  introductionText = new visual.TextStim({
    win: psychoJS.window,
    name: 'introductionText',
    text: '',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], draggable: false, height: 0.05,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -1.0 
  });
  
  introSound = new sound.Sound({
      win: psychoJS.window,
      value: 'A',
      secs: (- 1),
      });
  introSound.setVolume(1.0);
  introSound.isPlaying = false;
  introSound.isFinished = false;
  replayBtn = new visual.ButtonStim({
    win: psychoJS.window,
    name: 'replayBtn',
    text: 'Replay',
    font: 'Arial',
    pos: [(- 0.35), (- 0.4)],
    size: [0.3, 0.08],
    padding: null,
    anchor: 'center',
    ori: 0.0,
    units: psychoJS.window.units,
    color: 'white',
    fillColor: 'darkgrey',
    borderColor: null,
    colorSpace: 'rgb',
    borderWidth: 0.0,
    opacity: null,
    depth: -3,
    letterHeight: 0.05,
    bold: true,
    italic: false,
  });
  replayBtn.clock = new util.Clock();
  
  continueBtn_2 = new visual.ButtonStim({
    win: psychoJS.window,
    name: 'continueBtn_2',
    text: 'Continue',
    font: 'Arvo',
    pos: [0.35, (- 0.4)],
    size: [0.3, 0.08],
    padding: null,
    anchor: 'center',
    ori: 0.0,
    units: psychoJS.window.units,
    color: 'white',
    fillColor: 'darkgrey',
    borderColor: null,
    colorSpace: 'rgb',
    borderWidth: 0.0,
    opacity: null,
    depth: -4,
    letterHeight: 0.05,
    bold: true,
    italic: false,
  });
  continueBtn_2.clock = new util.Clock();
  
  // Initialize components for Routine "trainingRoutine"
  trainingRoutineClock = new util.Clock();
  text = new visual.TextStim({
    win: psychoJS.window,
    name: 'text',
    text: 'You will now hear pairs of similar-sounding words which have been synthesized. In each pair, one version does not contain vocal fry at all and the other contains very strong vocal fry.\n\nWatch where the arrow points and read the label, then click that spot on the scale. Once you’ve selected the highlighted spot, click Continue to move on to the next sound.',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], draggable: false, height: 0.05,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: 0.0 
  });
  
  continueBtn_3 = new visual.ButtonStim({
    win: psychoJS.window,
    name: 'continueBtn_3',
    text: 'Continue',
    font: 'Arvo',
    pos: [0, (- 0.4)],
    size: [0.3, 0.08],
    padding: null,
    anchor: 'center',
    ori: 0.0,
    units: psychoJS.window.units,
    color: 'white',
    fillColor: 'darkgrey',
    borderColor: null,
    colorSpace: 'rgb',
    borderWidth: 0.0,
    opacity: null,
    depth: -1,
    letterHeight: 0.05,
    bold: true,
    italic: false,
  });
  continueBtn_3.clock = new util.Clock();
  
  // Initialize components for Routine "trainingTrial"
  trainingTrialClock = new util.Clock();
  mouse = new core.Mouse({
    win: psychoJS.window,
  });
  mouse.mouseClock = new util.Clock();
  trainSound = new sound.Sound({
      win: psychoJS.window,
      value: 'A',
      secs: (- 1),
      });
  trainSound.setVolume(1.0);
  trainSound.isPlaying = false;
  trainSound.isFinished = false;
  binButton = new visual.ButtonStim({
    win: psychoJS.window,
    name: 'binButton',
    text: 'No vocal fry',
    font: 'Arial',
    pos: [(- 0.55), (- 0.15)],
    size: [0.16, 0.16],
    padding: null,
    anchor: 'center',
    ori: 0.0,
    units: psychoJS.window.units,
    color: 'white',
    fillColor: 'darkgrey',
    borderColor: null,
    colorSpace: 'rgb',
    borderWidth: 0.0,
    opacity: null,
    depth: -3,
    letterHeight: 0.03,
    bold: true,
    italic: false,
  });
  binButton.clock = new util.Clock();
  
  trainSlider = new visual.Slider({
    win: psychoJS.window, name: 'trainSlider',
    startValue: undefined,
    size: [0.75, 0.05], pos: [0.1, (- 0.15)], ori: 0.0, units: psychoJS.window.units,
    labels: ["Very weak", "Very strong"], fontSize: 0.05, ticks: [1, 100],
    granularity: 0.0, style: ["RATING"],
    color: new util.Color('LightGray'), markerColor: new util.Color((-1.0000, 0.0039, -1.0000)), lineColor: new util.Color('White'), 
    opacity: undefined, fontFamily: 'Noto Sans', bold: true, italic: false, depth: -4, 
    flip: false,
  });
  
  arrowShape = new visual.ShapeStim({
    win: psychoJS.window, name: 'arrowShape', 
    vertices: [[(- 0.01), 0.075], [0.01, 0.075], [0.01, (- 0.025)], [0.03, (- 0.025)], [0, (- 0.075)], [(- 0.03), (- 0.025)], [(- 0.01), (- 0.025)]], size: [1, 1],
    ori: 0.0, 
    pos: [0, 0], 
    draggable: false, 
    anchor: 'center', 
    lineWidth: 1.0, 
    lineColor: new util.Color('yellow'), 
    fillColor: new util.Color('yellow'), 
    colorSpace: 'rgb', 
    opacity: undefined, 
    depth: -5, 
    interpolate: true, 
  });
  
  trainLabel = new visual.TextStim({
    win: psychoJS.window,
    name: 'trainLabel',
    text: '',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0.3], draggable: false, height: 0.05,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -6.0 
  });
  
  feedbackText = new visual.TextStim({
    win: psychoJS.window,
    name: 'feedbackText',
    text: '',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0.15], draggable: false, height: 0.05,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -7.0 
  });
  
  replayBtn_2 = new visual.ButtonStim({
    win: psychoJS.window,
    name: 'replayBtn_2',
    text: 'Replay',
    font: 'Arial',
    pos: [(- 0.35), (- 0.4)],
    size: [0.3, 0.08],
    padding: null,
    anchor: 'center',
    ori: 0.0,
    units: psychoJS.window.units,
    color: 'white',
    fillColor: 'darkgrey',
    borderColor: null,
    colorSpace: 'rgb',
    borderWidth: 0.0,
    opacity: null,
    depth: -8,
    letterHeight: 0.05,
    bold: true,
    italic: false,
  });
  replayBtn_2.clock = new util.Clock();
  
  continueBtn_4 = new visual.ButtonStim({
    win: psychoJS.window,
    name: 'continueBtn_4',
    text: 'Continue',
    font: 'Arial',
    pos: [0.35, (- 0.4)],
    size: [0.3, 0.08],
    padding: null,
    anchor: 'center',
    ori: 0.0,
    units: psychoJS.window.units,
    color: 'white',
    fillColor: 'darkgrey',
    borderColor: null,
    colorSpace: 'rgb',
    borderWidth: 0.0,
    opacity: 1.0,
    depth: -9,
    letterHeight: 0.05,
    bold: true,
    italic: false,
  });
  continueBtn_4.clock = new util.Clock();
  
  // Initialize components for Routine "mainRoutine"
  mainRoutineClock = new util.Clock();
  mainInstructions = new visual.TextStim({
    win: psychoJS.window,
    name: 'mainInstructions',
    text: 'Welcome to the main part of the experiment!\n\nYou will listen to a series of sounds. After each one, rate whether you hear vocal fry in the sound and, if so, how strong the vocal fry is.',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], draggable: false, height: 0.05,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: 0.0 
  });
  
  continueBtn_6 = new visual.ButtonStim({
    win: psychoJS.window,
    name: 'continueBtn_6',
    text: 'Continue',
    font: 'Arial',
    pos: [0, (- 0.4)],
    size: [0.3, 0.08],
    padding: null,
    anchor: 'center',
    ori: 0.0,
    units: psychoJS.window.units,
    color: 'white',
    fillColor: 'darkgrey',
    borderColor: null,
    colorSpace: 'rgb',
    borderWidth: 0.0,
    opacity: null,
    depth: -1,
    letterHeight: 0.05,
    bold: true,
    italic: false,
  });
  continueBtn_6.clock = new util.Clock();
  
  // Initialize components for Routine "mainTrial"
  mainTrialClock = new util.Clock();
  // Run 'Begin Experiment' code from mainLogic
  trialCounter = 0;
  totalTrials = 88;
  
  mouse_2 = new core.Mouse({
    win: psychoJS.window,
  });
  mouse_2.mouseClock = new util.Clock();
  mainSound = new sound.Sound({
      win: psychoJS.window,
      value: 'A',
      secs: (- 1),
      });
  mainSound.setVolume(1.0);
  mainSound.isPlaying = false;
  mainSound.isFinished = false;
  binButton_2 = new visual.ButtonStim({
    win: psychoJS.window,
    name: 'binButton_2',
    text: 'No vocal fry',
    font: 'Arial',
    pos: [(- 0.55), (- 0.15)],
    size: [0.16, 0.16],
    padding: null,
    anchor: 'center',
    ori: 0.0,
    units: psychoJS.window.units,
    color: 'white',
    fillColor: 'darkgrey',
    borderColor: null,
    colorSpace: 'rgb',
    borderWidth: 0.0,
    opacity: null,
    depth: -3,
    letterHeight: 0.03,
    bold: true,
    italic: false,
  });
  binButton_2.clock = new util.Clock();
  
  mainSlider = new visual.Slider({
    win: psychoJS.window, name: 'mainSlider',
    startValue: undefined,
    size: [0.75, 0.05], pos: [0.1, (- 0.15)], ori: 0.0, units: psychoJS.window.units,
    labels: ["Very weak", "Very strong"], fontSize: 0.05, ticks: [1, 100],
    granularity: 0.0, style: ["RATING"],
    color: new util.Color('LightGray'), markerColor: new util.Color((-1.0000, 0.0039, -1.0000)), lineColor: new util.Color('White'), 
    opacity: undefined, fontFamily: 'Noto Sans', bold: true, italic: false, depth: -4, 
    flip: false,
  });
  
  replayBtn_3 = new visual.ButtonStim({
    win: psychoJS.window,
    name: 'replayBtn_3',
    text: 'Replay',
    font: 'Arial',
    pos: [(- 0.35), (- 0.4)],
    size: [0.3, 0.08],
    padding: null,
    anchor: 'center',
    ori: 0.0,
    units: psychoJS.window.units,
    color: 'white',
    fillColor: 'darkgrey',
    borderColor: null,
    colorSpace: 'rgb',
    borderWidth: 0.0,
    opacity: null,
    depth: -5,
    letterHeight: 0.05,
    bold: true,
    italic: false,
  });
  replayBtn_3.clock = new util.Clock();
  
  continueBtn_5 = new visual.ButtonStim({
    win: psychoJS.window,
    name: 'continueBtn_5',
    text: 'Continue',
    font: 'Arial',
    pos: [0.35, (- 0.4)],
    size: [0.3, 0.08],
    padding: null,
    anchor: 'center',
    ori: 0.0,
    units: psychoJS.window.units,
    color: 'white',
    fillColor: 'darkgrey',
    borderColor: null,
    colorSpace: 'rgb',
    borderWidth: 0.0,
    opacity: 1.0,
    depth: -6,
    letterHeight: 0.05,
    bold: true,
    italic: false,
  });
  continueBtn_5.clock = new util.Clock();
  
  trialCounterText = new visual.TextStim({
    win: psychoJS.window,
    name: 'trialCounterText',
    text: '',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0.45], draggable: false, height: 0.03,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('grey'),  opacity: undefined,
    depth: -7.0 
  });
  
  // Initialize components for Routine "breakScreen"
  breakScreenClock = new util.Clock();
  breakText = new visual.TextStim({
    win: psychoJS.window,
    name: 'breakText',
    text: 'Please, take a short break.\n\nClick Continue when you’re ready.',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], draggable: false, height: 0.05,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -1.0 
  });
  
  breakContinueButton = new visual.ButtonStim({
    win: psychoJS.window,
    name: 'breakContinueButton',
    text: 'Continue',
    font: 'Arial',
    pos: [0, (- 0.4)],
    size: [0.3, 0.08],
    padding: null,
    anchor: 'center',
    ori: 0.0,
    units: psychoJS.window.units,
    color: 'white',
    fillColor: 'darkgrey',
    borderColor: null,
    colorSpace: 'rgb',
    borderWidth: 0.0,
    opacity: null,
    depth: -2,
    letterHeight: 0.05,
    bold: true,
    italic: false,
  });
  breakContinueButton.clock = new util.Clock();
  
  // Initialize components for Routine "surveyRoutine"
  surveyRoutineClock = new util.Clock();
  surveyForm = new visual.Form({
    win : psychoJS.window, name:'surveyForm',
    items : 'conditions/survey.xlsx',
    textHeight : 0.03,
    font : 'Arial',
    randomize : false,
    size : [1.4, 0.8],
    pos : [0, 0.05],
    style : 'dark',
    itemPadding : 0.05,
    depth : -1
  });
  submitBtn = new visual.ButtonStim({
    win: psychoJS.window,
    name: 'submitBtn',
    text: 'Submit',
    font: 'Arvo',
    pos: [0, (- 0.42)],
    size: [0.3, 0.08],
    padding: null,
    anchor: 'center',
    ori: 0.0,
    units: psychoJS.window.units,
    color: 'white',
    fillColor: 'darkgrey',
    borderColor: null,
    colorSpace: 'rgb',
    borderWidth: 0.0,
    opacity: null,
    depth: -2,
    letterHeight: 0.05,
    bold: true,
    italic: false,
  });
  submitBtn.clock = new util.Clock();
  
  // Initialize components for Routine "thankYouScreen"
  thankYouScreenClock = new util.Clock();
  thankYouText = new visual.TextStim({
    win: psychoJS.window,
    name: 'thankYouText',
    text: 'Thank you! The experiment has been completed.\n\nPlease wait 5 seconds while your results are being saved.\n\nYou may then click the button below to close the window.',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], draggable: false, height: 0.05,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -1.0 
  });
  
  closeButton = new visual.ButtonStim({
    win: psychoJS.window,
    name: 'closeButton',
    text: 'Finish experiment',
    font: 'Arial',
    pos: [0, (- 0.4)],
    size: [0.5, 0.08],
    padding: null,
    anchor: 'center',
    ori: 0.0,
    units: psychoJS.window.units,
    color: 'white',
    fillColor: 'darkgrey',
    borderColor: null,
    colorSpace: 'rgb',
    borderWidth: 0.0,
    opacity: null,
    depth: -2,
    letterHeight: 0.03,
    bold: true,
    italic: false,
  });
  closeButton.clock = new util.Clock();
  
  // Create some handy timers
  globalClock = new util.Clock();  // to track the time since experiment started
  routineTimer = new util.CountdownTimer();  // to track time remaining of each (non-slip) routine
  
  return Scheduler.Event.NEXT;
}


var t;
var frameN;
var continueRoutine;
var routineForceEnded;
var welcomeRoutineMaxDurationReached;
var welcomeRoutineMaxDuration;
var welcomeRoutineComponents;
function welcomeRoutineRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'welcomeRoutine' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // keep track of whether this Routine was forcibly ended
    routineForceEnded = false;
    welcomeRoutineClock.reset();
    routineTimer.reset();
    welcomeRoutineMaxDurationReached = false;
    // update component parameters for each repeat
    // reset continueBtn to account for continued clicks & clear times on/off
    continueBtn.reset()
    psychoJS.experiment.addData('welcomeRoutine.started', globalClock.getTime());
    welcomeRoutineMaxDuration = null
    // keep track of which components have finished
    welcomeRoutineComponents = [];
    welcomeRoutineComponents.push(welcomeText);
    welcomeRoutineComponents.push(continueBtn);
    
    for (const thisComponent of welcomeRoutineComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function welcomeRoutineRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'welcomeRoutine' ---
    // get current time
    t = welcomeRoutineClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *welcomeText* updates
    if (t >= 0 && welcomeText.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      welcomeText.tStart = t;  // (not accounting for frame time here)
      welcomeText.frameNStart = frameN;  // exact frame index
      
      welcomeText.setAutoDraw(true);
    }
    
    
    // if welcomeText is active this frame...
    if (welcomeText.status === PsychoJS.Status.STARTED) {
    }
    
    
    // *continueBtn* updates
    if (t >= 0 && continueBtn.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      continueBtn.tStart = t;  // (not accounting for frame time here)
      continueBtn.frameNStart = frameN;  // exact frame index
      
      continueBtn.setAutoDraw(true);
    }
    
    
    // if continueBtn is active this frame...
    if (continueBtn.status === PsychoJS.Status.STARTED) {
    }
    
    if (continueBtn.status === PsychoJS.Status.STARTED) {
      // check whether continueBtn has been pressed
      if (continueBtn.isClicked) {
        if (!continueBtn.wasClicked) {
          // store time of first click
          continueBtn.timesOn.push(continueBtn.clock.getTime());
          // store time clicked until
          continueBtn.timesOff.push(continueBtn.clock.getTime());
        } else {
          // update time clicked until;
          continueBtn.timesOff[continueBtn.timesOff.length - 1] = continueBtn.clock.getTime();
        }
        if (!continueBtn.wasClicked) {
          // end routine when continueBtn is clicked
          continueRoutine = false;
          
        }
        // if continueBtn is still clicked next frame, it is not a new click
        continueBtn.wasClicked = true;
      } else {
        // if continueBtn is clicked next frame, it is a new click
        continueBtn.wasClicked = false;
      }
    } else {
      // keep clock at 0 if continueBtn hasn't started / has finished
      continueBtn.clock.reset();
      // if continueBtn is clicked next frame, it is a new click
      continueBtn.wasClicked = false;
    }
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      routineForceEnded = true;
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of welcomeRoutineComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function welcomeRoutineRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'welcomeRoutine' ---
    for (const thisComponent of welcomeRoutineComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('welcomeRoutine.stopped', globalClock.getTime());
    psychoJS.experiment.addData('continueBtn.numClicks', continueBtn.numClicks);
    psychoJS.experiment.addData('continueBtn.timesOn', continueBtn.timesOn);
    psychoJS.experiment.addData('continueBtn.timesOff', continueBtn.timesOff);
    // the Routine "welcomeRoutine" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var introLoop;
function introLoopLoopBegin(introLoopLoopScheduler, snapshot) {
  return async function() {
    TrialHandler.fromSnapshot(snapshot); // update internal variables (.thisN etc) of the loop
    
    // set up handler to look after randomisation of conditions etc
    introLoop = new TrialHandler({
      psychoJS: psychoJS,
      nReps: 1, method: TrialHandler.Method.SEQUENTIAL,
      extraInfo: expInfo, originPath: undefined,
      trialList: 'conditions/introduction.xlsx',
      seed: undefined, name: 'introLoop'
    });
    psychoJS.experiment.addLoop(introLoop); // add the loop to the experiment
    currentLoop = introLoop;  // we're now the current loop
    
    // Schedule all the trials in the trialList:
    for (const thisIntroLoop of introLoop) {
      snapshot = introLoop.getSnapshot();
      introLoopLoopScheduler.add(importConditions(snapshot));
      introLoopLoopScheduler.add(introTrialRoutineBegin(snapshot));
      introLoopLoopScheduler.add(introTrialRoutineEachFrame());
      introLoopLoopScheduler.add(introTrialRoutineEnd(snapshot));
      introLoopLoopScheduler.add(introLoopLoopEndIteration(introLoopLoopScheduler, snapshot));
    }
    
    return Scheduler.Event.NEXT;
  }
}


async function introLoopLoopEnd() {
  // terminate loop
  psychoJS.experiment.removeLoop(introLoop);
  // update the current loop from the ExperimentHandler
  if (psychoJS.experiment._unfinishedLoops.length>0)
    currentLoop = psychoJS.experiment._unfinishedLoops.at(-1);
  else
    currentLoop = psychoJS.experiment;  // so we use addData from the experiment
  return Scheduler.Event.NEXT;
}


function introLoopLoopEndIteration(scheduler, snapshot) {
  // ------Prepare for next entry------
  return async function () {
    if (typeof snapshot !== 'undefined') {
      // ------Check if user ended loop early------
      if (snapshot.finished) {
        // Check for and save orphaned data
        if (psychoJS.experiment.isEntryEmpty()) {
          psychoJS.experiment.nextEntry(snapshot);
        }
        scheduler.stop();
      }
    return Scheduler.Event.NEXT;
    }
  };
}


var trainingLoop;
function trainingLoopLoopBegin(trainingLoopLoopScheduler, snapshot) {
  return async function() {
    TrialHandler.fromSnapshot(snapshot); // update internal variables (.thisN etc) of the loop
    
    // set up handler to look after randomisation of conditions etc
    trainingLoop = new TrialHandler({
      psychoJS: psychoJS,
      nReps: 1, method: TrialHandler.Method.SEQUENTIAL,
      extraInfo: expInfo, originPath: undefined,
      trialList: 'conditions/training.xlsx',
      seed: undefined, name: 'trainingLoop'
    });
    psychoJS.experiment.addLoop(trainingLoop); // add the loop to the experiment
    currentLoop = trainingLoop;  // we're now the current loop
    
    // Schedule all the trials in the trialList:
    for (const thisTrainingLoop of trainingLoop) {
      snapshot = trainingLoop.getSnapshot();
      trainingLoopLoopScheduler.add(importConditions(snapshot));
      trainingLoopLoopScheduler.add(trainingTrialRoutineBegin(snapshot));
      trainingLoopLoopScheduler.add(trainingTrialRoutineEachFrame());
      trainingLoopLoopScheduler.add(trainingTrialRoutineEnd(snapshot));
      trainingLoopLoopScheduler.add(trainingLoopLoopEndIteration(trainingLoopLoopScheduler, snapshot));
    }
    
    return Scheduler.Event.NEXT;
  }
}


async function trainingLoopLoopEnd() {
  // terminate loop
  psychoJS.experiment.removeLoop(trainingLoop);
  // update the current loop from the ExperimentHandler
  if (psychoJS.experiment._unfinishedLoops.length>0)
    currentLoop = psychoJS.experiment._unfinishedLoops.at(-1);
  else
    currentLoop = psychoJS.experiment;  // so we use addData from the experiment
  return Scheduler.Event.NEXT;
}


function trainingLoopLoopEndIteration(scheduler, snapshot) {
  // ------Prepare for next entry------
  return async function () {
    if (typeof snapshot !== 'undefined') {
      // ------Check if user ended loop early------
      if (snapshot.finished) {
        // Check for and save orphaned data
        if (psychoJS.experiment.isEntryEmpty()) {
          psychoJS.experiment.nextEntry(snapshot);
        }
        scheduler.stop();
      } else {
        psychoJS.experiment.nextEntry(snapshot);
      }
    return Scheduler.Event.NEXT;
    }
  };
}


var mainLoop;
function mainLoopLoopBegin(mainLoopLoopScheduler, snapshot) {
  return async function() {
    TrialHandler.fromSnapshot(snapshot); // update internal variables (.thisN etc) of the loop
    
    // set up handler to look after randomisation of conditions etc
    mainLoop = new TrialHandler({
      psychoJS: psychoJS,
      nReps: 1, method: TrialHandler.Method.RANDOM,
      extraInfo: expInfo, originPath: undefined,
      trialList: 'conditions/stimuli.xlsx',
      seed: undefined, name: 'mainLoop'
    });
    psychoJS.experiment.addLoop(mainLoop); // add the loop to the experiment
    currentLoop = mainLoop;  // we're now the current loop
    
    // Schedule all the trials in the trialList:
    for (const thisMainLoop of mainLoop) {
      snapshot = mainLoop.getSnapshot();
      mainLoopLoopScheduler.add(importConditions(snapshot));
      mainLoopLoopScheduler.add(mainTrialRoutineBegin(snapshot));
      mainLoopLoopScheduler.add(mainTrialRoutineEachFrame());
      mainLoopLoopScheduler.add(mainTrialRoutineEnd(snapshot));
      mainLoopLoopScheduler.add(breakScreenRoutineBegin(snapshot));
      mainLoopLoopScheduler.add(breakScreenRoutineEachFrame());
      mainLoopLoopScheduler.add(breakScreenRoutineEnd(snapshot));
      mainLoopLoopScheduler.add(mainLoopLoopEndIteration(mainLoopLoopScheduler, snapshot));
    }
    
    return Scheduler.Event.NEXT;
  }
}


async function mainLoopLoopEnd() {
  // terminate loop
  psychoJS.experiment.removeLoop(mainLoop);
  // update the current loop from the ExperimentHandler
  if (psychoJS.experiment._unfinishedLoops.length>0)
    currentLoop = psychoJS.experiment._unfinishedLoops.at(-1);
  else
    currentLoop = psychoJS.experiment;  // so we use addData from the experiment
  return Scheduler.Event.NEXT;
}


function mainLoopLoopEndIteration(scheduler, snapshot) {
  // ------Prepare for next entry------
  return async function () {
    if (typeof snapshot !== 'undefined') {
      // ------Check if user ended loop early------
      if (snapshot.finished) {
        // Check for and save orphaned data
        if (psychoJS.experiment.isEntryEmpty()) {
          psychoJS.experiment.nextEntry(snapshot);
        }
        scheduler.stop();
      } else {
        psychoJS.experiment.nextEntry(snapshot);
      }
    return Scheduler.Event.NEXT;
    }
  };
}


var introTrialMaxDurationReached;
var prevReplayClicks;
var introTrialMaxDuration;
var introTrialComponents;
function introTrialRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'introTrial' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // keep track of whether this Routine was forcibly ended
    routineForceEnded = false;
    introTrialClock.reset();
    routineTimer.reset();
    introTrialMaxDurationReached = false;
    // update component parameters for each repeat
    // Run 'Begin Routine' code from introLogic
    prevReplayClicks = 0;
    
    introductionText.setText(introText);
    introSound.isFinished = false;
    introSound.setValue(introFile);
    introSound.setVolume(1.0);
    // reset replayBtn to account for continued clicks & clear times on/off
    replayBtn.reset()
    // reset continueBtn_2 to account for continued clicks & clear times on/off
    continueBtn_2.reset()
    psychoJS.experiment.addData('introTrial.started', globalClock.getTime());
    introTrialMaxDuration = null
    // keep track of which components have finished
    introTrialComponents = [];
    introTrialComponents.push(introductionText);
    introTrialComponents.push(introSound);
    introTrialComponents.push(replayBtn);
    introTrialComponents.push(continueBtn_2);
    
    for (const thisComponent of introTrialComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function introTrialRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'introTrial' ---
    // get current time
    t = introTrialClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    // Run 'Each Frame' code from introLogic
    if ((replayBtn.numClicks > prevReplayClicks)) {
        introSound.play();
        prevReplayClicks = replayBtn.numClicks;
    }
    
    
    // *introductionText* updates
    if (t >= 0 && introductionText.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      introductionText.tStart = t;  // (not accounting for frame time here)
      introductionText.frameNStart = frameN;  // exact frame index
      
      introductionText.setAutoDraw(true);
    }
    
    
    // if introductionText is active this frame...
    if (introductionText.status === PsychoJS.Status.STARTED) {
    }
    
    if (introSound.status === STARTED) {
        introSound.isPlaying = true;
        if (t >= (introSound.getDuration() + introSound.tStart)) {
            introSound.isFinished = true;
        }
    }
    // start/stop introSound
    if (t >= 0.3 && introSound.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      introSound.tStart = t;  // (not accounting for frame time here)
      introSound.frameNStart = frameN;  // exact frame index
      
      psychoJS.window.callOnFlip(function(){ introSound.play(); });  // screen flip
      introSound.status = PsychoJS.Status.STARTED;
    }
    if (introSound.status === PsychoJS.Status.STARTED && Boolean(false) || introSound.isFinished) {
      // keep track of stop time/frame for later
      introSound.tStop = t;  // not accounting for scr refresh
      introSound.frameNStop = frameN;  // exact frame index
      // update status
      introSound.status = PsychoJS.Status.FINISHED;
      // stop playback
      introSound.stop();
    }
    
    // *replayBtn* updates
    if (t >= 0 && replayBtn.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      replayBtn.tStart = t;  // (not accounting for frame time here)
      replayBtn.frameNStart = frameN;  // exact frame index
      
      replayBtn.setAutoDraw(true);
    }
    
    
    // if replayBtn is active this frame...
    if (replayBtn.status === PsychoJS.Status.STARTED) {
    }
    
    if (replayBtn.status === PsychoJS.Status.STARTED) {
      // check whether replayBtn has been pressed
      if (replayBtn.isClicked) {
        if (!replayBtn.wasClicked) {
          // store time of first click
          replayBtn.timesOn.push(replayBtn.clock.getTime());
          // store time clicked until
          replayBtn.timesOff.push(replayBtn.clock.getTime());
        } else {
          // update time clicked until;
          replayBtn.timesOff[replayBtn.timesOff.length - 1] = replayBtn.clock.getTime();
        }
        if (!replayBtn.wasClicked) {
          
        }
        // if replayBtn is still clicked next frame, it is not a new click
        replayBtn.wasClicked = true;
      } else {
        // if replayBtn is clicked next frame, it is a new click
        replayBtn.wasClicked = false;
      }
    } else {
      // keep clock at 0 if replayBtn hasn't started / has finished
      replayBtn.clock.reset();
      // if replayBtn is clicked next frame, it is a new click
      replayBtn.wasClicked = false;
    }
    
    // *continueBtn_2* updates
    if (t >= 0 && continueBtn_2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      continueBtn_2.tStart = t;  // (not accounting for frame time here)
      continueBtn_2.frameNStart = frameN;  // exact frame index
      
      continueBtn_2.setAutoDraw(true);
    }
    
    
    // if continueBtn_2 is active this frame...
    if (continueBtn_2.status === PsychoJS.Status.STARTED) {
    }
    
    if (continueBtn_2.status === PsychoJS.Status.STARTED) {
      // check whether continueBtn_2 has been pressed
      if (continueBtn_2.isClicked) {
        if (!continueBtn_2.wasClicked) {
          // store time of first click
          continueBtn_2.timesOn.push(continueBtn_2.clock.getTime());
          // store time clicked until
          continueBtn_2.timesOff.push(continueBtn_2.clock.getTime());
        } else {
          // update time clicked until;
          continueBtn_2.timesOff[continueBtn_2.timesOff.length - 1] = continueBtn_2.clock.getTime();
        }
        if (!continueBtn_2.wasClicked) {
          // end routine when continueBtn_2 is clicked
          continueRoutine = false;
          
        }
        // if continueBtn_2 is still clicked next frame, it is not a new click
        continueBtn_2.wasClicked = true;
      } else {
        // if continueBtn_2 is clicked next frame, it is a new click
        continueBtn_2.wasClicked = false;
      }
    } else {
      // keep clock at 0 if continueBtn_2 hasn't started / has finished
      continueBtn_2.clock.reset();
      // if continueBtn_2 is clicked next frame, it is a new click
      continueBtn_2.wasClicked = false;
    }
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      routineForceEnded = true;
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of introTrialComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function introTrialRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'introTrial' ---
    for (const thisComponent of introTrialComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('introTrial.stopped', globalClock.getTime());
    introSound.stop();  // ensure sound has stopped at end of Routine
    psychoJS.experiment.addData('replayBtn.numClicks', replayBtn.numClicks);
    psychoJS.experiment.addData('replayBtn.timesOn', replayBtn.timesOn);
    psychoJS.experiment.addData('replayBtn.timesOff', replayBtn.timesOff);
    psychoJS.experiment.addData('continueBtn_2.numClicks', continueBtn_2.numClicks);
    psychoJS.experiment.addData('continueBtn_2.timesOn', continueBtn_2.timesOn);
    psychoJS.experiment.addData('continueBtn_2.timesOff', continueBtn_2.timesOff);
    // the Routine "introTrial" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var trainingRoutineMaxDurationReached;
var trainingRoutineMaxDuration;
var trainingRoutineComponents;
function trainingRoutineRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'trainingRoutine' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // keep track of whether this Routine was forcibly ended
    routineForceEnded = false;
    trainingRoutineClock.reset();
    routineTimer.reset();
    trainingRoutineMaxDurationReached = false;
    // update component parameters for each repeat
    // reset continueBtn_3 to account for continued clicks & clear times on/off
    continueBtn_3.reset()
    psychoJS.experiment.addData('trainingRoutine.started', globalClock.getTime());
    trainingRoutineMaxDuration = null
    // keep track of which components have finished
    trainingRoutineComponents = [];
    trainingRoutineComponents.push(text);
    trainingRoutineComponents.push(continueBtn_3);
    
    for (const thisComponent of trainingRoutineComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function trainingRoutineRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'trainingRoutine' ---
    // get current time
    t = trainingRoutineClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *text* updates
    if (t >= 0.0 && text.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text.tStart = t;  // (not accounting for frame time here)
      text.frameNStart = frameN;  // exact frame index
      
      text.setAutoDraw(true);
    }
    
    
    // if text is active this frame...
    if (text.status === PsychoJS.Status.STARTED) {
    }
    
    
    // *continueBtn_3* updates
    if (t >= 0 && continueBtn_3.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      continueBtn_3.tStart = t;  // (not accounting for frame time here)
      continueBtn_3.frameNStart = frameN;  // exact frame index
      
      continueBtn_3.setAutoDraw(true);
    }
    
    
    // if continueBtn_3 is active this frame...
    if (continueBtn_3.status === PsychoJS.Status.STARTED) {
    }
    
    if (continueBtn_3.status === PsychoJS.Status.STARTED) {
      // check whether continueBtn_3 has been pressed
      if (continueBtn_3.isClicked) {
        if (!continueBtn_3.wasClicked) {
          // store time of first click
          continueBtn_3.timesOn.push(continueBtn_3.clock.getTime());
          // store time clicked until
          continueBtn_3.timesOff.push(continueBtn_3.clock.getTime());
        } else {
          // update time clicked until;
          continueBtn_3.timesOff[continueBtn_3.timesOff.length - 1] = continueBtn_3.clock.getTime();
        }
        if (!continueBtn_3.wasClicked) {
          // end routine when continueBtn_3 is clicked
          continueRoutine = false;
          
        }
        // if continueBtn_3 is still clicked next frame, it is not a new click
        continueBtn_3.wasClicked = true;
      } else {
        // if continueBtn_3 is clicked next frame, it is a new click
        continueBtn_3.wasClicked = false;
      }
    } else {
      // keep clock at 0 if continueBtn_3 hasn't started / has finished
      continueBtn_3.clock.reset();
      // if continueBtn_3 is clicked next frame, it is a new click
      continueBtn_3.wasClicked = false;
    }
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      routineForceEnded = true;
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of trainingRoutineComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function trainingRoutineRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'trainingRoutine' ---
    for (const thisComponent of trainingRoutineComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('trainingRoutine.stopped', globalClock.getTime());
    psychoJS.experiment.addData('continueBtn_3.numClicks', continueBtn_3.numClicks);
    psychoJS.experiment.addData('continueBtn_3.timesOn', continueBtn_3.timesOn);
    psychoJS.experiment.addData('continueBtn_3.timesOff', continueBtn_3.timesOff);
    // the Routine "trainingRoutine" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var trainingTrialMaxDurationReached;
var correct;
var selection;
var arrowPos;
var labelText;
var feedbackMsg;
var gotValidClick;
var trainingTrialMaxDuration;
var trainingTrialComponents;
function trainingTrialRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'trainingTrial' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // keep track of whether this Routine was forcibly ended
    routineForceEnded = false;
    trainingTrialClock.reset();
    routineTimer.reset();
    trainingTrialMaxDurationReached = false;
    // update component parameters for each repeat
    // Run 'Begin Routine' code from trainingLogic
    correct = false;
    selection = "";
    arrowPos = ((stimType === "modal") ? [(- 0.55), (- 0.015)] : [0.475, (- 0.015)]);
    labelText = ((stimType === "modal") ? "There is NO vocal fry at all." : "There is VERY STRONG vocal fry.");
    feedbackMsg = "";
    
    // setup some python lists for storing info about the mouse
    gotValidClick = false; // until a click is received
    trainSound.isFinished = false;
    trainSound.setValue(trainFile);
    trainSound.setVolume(1.0);
    // reset binButton to account for continued clicks & clear times on/off
    binButton.reset()
    trainSlider.reset()
    arrowShape.setPos(arrowPos);
    trainLabel.setText(labelText);
    // reset replayBtn_2 to account for continued clicks & clear times on/off
    replayBtn_2.reset()
    // reset continueBtn_4 to account for continued clicks & clear times on/off
    continueBtn_4.reset()
    psychoJS.experiment.addData('trainingTrial.started', globalClock.getTime());
    trainingTrialMaxDuration = null
    // keep track of which components have finished
    trainingTrialComponents = [];
    trainingTrialComponents.push(mouse);
    trainingTrialComponents.push(trainSound);
    trainingTrialComponents.push(binButton);
    trainingTrialComponents.push(trainSlider);
    trainingTrialComponents.push(arrowShape);
    trainingTrialComponents.push(trainLabel);
    trainingTrialComponents.push(feedbackText);
    trainingTrialComponents.push(replayBtn_2);
    trainingTrialComponents.push(continueBtn_4);
    
    for (const thisComponent of trainingTrialComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


var rating;
function trainingTrialRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'trainingTrial' ---
    // get current time
    t = trainingTrialClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    // Run 'Each Frame' code from trainingLogic
    if (binButton.isClicked) {
        selection = "bin";
        trainSlider.reset();
    }
    rating = trainSlider.getRating();
    if (rating) {
        selection = "slider";
    }
    if ((selection === "bin")) {
        correct = (stimType === "modal");
    } else {
        if ((selection === "slider")) {
            correct = ((stimType === "creaky") && (rating >= 90));
        } else {
            correct = false;
        }
    }
    if ((! selection)) {
        feedbackMsg = "";
    } else {
        if (correct) {
            feedbackMsg = "You may now continue to the next sound!";
        } else {
            feedbackMsg = "Try again.";
        }
    }
    feedbackText.color = (correct ? "green" : "red");
    binButton.fillColor = ((selection === "bin") ? "green" : "darkgrey");
    continueBtn_4.opacity = (correct ? 1.0 : 0.35);
    if (replayBtn_2.isClicked) {
        trainSound.play();
    }
    if ((continueBtn_4.isClicked && correct)) {
        continueRoutine = false;
    }
    
    if (trainSound.status === STARTED) {
        trainSound.isPlaying = true;
        if (t >= (trainSound.getDuration() + trainSound.tStart)) {
            trainSound.isFinished = true;
        }
    }
    // start/stop trainSound
    if (t >= 0.3 && trainSound.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      trainSound.tStart = t;  // (not accounting for frame time here)
      trainSound.frameNStart = frameN;  // exact frame index
      
      psychoJS.window.callOnFlip(function(){ trainSound.play(); });  // screen flip
      trainSound.status = PsychoJS.Status.STARTED;
    }
    if (trainSound.status === PsychoJS.Status.STARTED && Boolean(false) || trainSound.isFinished) {
      // keep track of stop time/frame for later
      trainSound.tStop = t;  // not accounting for scr refresh
      trainSound.frameNStop = frameN;  // exact frame index
      // update status
      trainSound.status = PsychoJS.Status.FINISHED;
      // stop playback
      trainSound.stop();
    }
    
    // *binButton* updates
    if (t >= 0 && binButton.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      binButton.tStart = t;  // (not accounting for frame time here)
      binButton.frameNStart = frameN;  // exact frame index
      
      binButton.setAutoDraw(true);
    }
    
    
    // if binButton is active this frame...
    if (binButton.status === PsychoJS.Status.STARTED) {
    }
    
    if (binButton.status === PsychoJS.Status.STARTED) {
      // check whether binButton has been pressed
      if (binButton.isClicked) {
        if (!binButton.wasClicked) {
          // store time of first click
          binButton.timesOn.push(binButton.clock.getTime());
          // store time clicked until
          binButton.timesOff.push(binButton.clock.getTime());
        } else {
          // update time clicked until;
          binButton.timesOff[binButton.timesOff.length - 1] = binButton.clock.getTime();
        }
        if (!binButton.wasClicked) {
          
        }
        // if binButton is still clicked next frame, it is not a new click
        binButton.wasClicked = true;
      } else {
        // if binButton is clicked next frame, it is a new click
        binButton.wasClicked = false;
      }
    } else {
      // keep clock at 0 if binButton hasn't started / has finished
      binButton.clock.reset();
      // if binButton is clicked next frame, it is a new click
      binButton.wasClicked = false;
    }
    
    // *trainSlider* updates
    if (t >= 0.0 && trainSlider.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      trainSlider.tStart = t;  // (not accounting for frame time here)
      trainSlider.frameNStart = frameN;  // exact frame index
      
      trainSlider.setAutoDraw(true);
    }
    
    
    // if trainSlider is active this frame...
    if (trainSlider.status === PsychoJS.Status.STARTED) {
    }
    
    
    // *arrowShape* updates
    if (t >= 0.0 && arrowShape.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      arrowShape.tStart = t;  // (not accounting for frame time here)
      arrowShape.frameNStart = frameN;  // exact frame index
      
      arrowShape.setAutoDraw(true);
    }
    
    
    // if arrowShape is active this frame...
    if (arrowShape.status === PsychoJS.Status.STARTED) {
    }
    
    
    // *trainLabel* updates
    if (t >= 0.0 && trainLabel.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      trainLabel.tStart = t;  // (not accounting for frame time here)
      trainLabel.frameNStart = frameN;  // exact frame index
      
      trainLabel.setAutoDraw(true);
    }
    
    
    // if trainLabel is active this frame...
    if (trainLabel.status === PsychoJS.Status.STARTED) {
    }
    
    
    // *feedbackText* updates
    if (t >= 0.0 && feedbackText.status === PsychoJS.Status.NOT_STARTED) {
      // update params
      feedbackText.setColor(new util.Color('white'), false);
      feedbackText.setText(feedbackMsg, false);
      // keep track of start time/frame for later
      feedbackText.tStart = t;  // (not accounting for frame time here)
      feedbackText.frameNStart = frameN;  // exact frame index
      
      feedbackText.setAutoDraw(true);
    }
    
    
    // if feedbackText is active this frame...
    if (feedbackText.status === PsychoJS.Status.STARTED) {
      // update params
      feedbackText.setColor(new util.Color('white'), false);
      feedbackText.setText(feedbackMsg, false);
    }
    
    
    // *replayBtn_2* updates
    if (t >= 0 && replayBtn_2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      replayBtn_2.tStart = t;  // (not accounting for frame time here)
      replayBtn_2.frameNStart = frameN;  // exact frame index
      
      replayBtn_2.setAutoDraw(true);
    }
    
    
    // if replayBtn_2 is active this frame...
    if (replayBtn_2.status === PsychoJS.Status.STARTED) {
    }
    
    if (replayBtn_2.status === PsychoJS.Status.STARTED) {
      // check whether replayBtn_2 has been pressed
      if (replayBtn_2.isClicked) {
        if (!replayBtn_2.wasClicked) {
          // store time of first click
          replayBtn_2.timesOn.push(replayBtn_2.clock.getTime());
          // store time clicked until
          replayBtn_2.timesOff.push(replayBtn_2.clock.getTime());
        } else {
          // update time clicked until;
          replayBtn_2.timesOff[replayBtn_2.timesOff.length - 1] = replayBtn_2.clock.getTime();
        }
        if (!replayBtn_2.wasClicked) {
          
        }
        // if replayBtn_2 is still clicked next frame, it is not a new click
        replayBtn_2.wasClicked = true;
      } else {
        // if replayBtn_2 is clicked next frame, it is a new click
        replayBtn_2.wasClicked = false;
      }
    } else {
      // keep clock at 0 if replayBtn_2 hasn't started / has finished
      replayBtn_2.clock.reset();
      // if replayBtn_2 is clicked next frame, it is a new click
      replayBtn_2.wasClicked = false;
    }
    
    // *continueBtn_4* updates
    if (t >= 0 && continueBtn_4.status === PsychoJS.Status.NOT_STARTED) {
      // update params
      continueBtn_4.setOpacity(1.0, false);
      // keep track of start time/frame for later
      continueBtn_4.tStart = t;  // (not accounting for frame time here)
      continueBtn_4.frameNStart = frameN;  // exact frame index
      
      continueBtn_4.setAutoDraw(true);
    }
    
    
    // if continueBtn_4 is active this frame...
    if (continueBtn_4.status === PsychoJS.Status.STARTED) {
      // update params
      continueBtn_4.setOpacity(1.0, false);
    }
    
    if (continueBtn_4.status === PsychoJS.Status.STARTED) {
      // check whether continueBtn_4 has been pressed
      if (continueBtn_4.isClicked) {
        if (!continueBtn_4.wasClicked) {
          // store time of first click
          continueBtn_4.timesOn.push(continueBtn_4.clock.getTime());
          // store time clicked until
          continueBtn_4.timesOff.push(continueBtn_4.clock.getTime());
        } else {
          // update time clicked until;
          continueBtn_4.timesOff[continueBtn_4.timesOff.length - 1] = continueBtn_4.clock.getTime();
        }
        if (!continueBtn_4.wasClicked) {
          
        }
        // if continueBtn_4 is still clicked next frame, it is not a new click
        continueBtn_4.wasClicked = true;
      } else {
        // if continueBtn_4 is clicked next frame, it is a new click
        continueBtn_4.wasClicked = false;
      }
    } else {
      // keep clock at 0 if continueBtn_4 hasn't started / has finished
      continueBtn_4.clock.reset();
      // if continueBtn_4 is clicked next frame, it is a new click
      continueBtn_4.wasClicked = false;
    }
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      routineForceEnded = true;
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of trainingTrialComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function trainingTrialRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'trainingTrial' ---
    for (const thisComponent of trainingTrialComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('trainingTrial.stopped', globalClock.getTime());
    // store data for psychoJS.experiment (ExperimentHandler)
    trainSound.stop();  // ensure sound has stopped at end of Routine
    psychoJS.experiment.addData('binButton.numClicks', binButton.numClicks);
    psychoJS.experiment.addData('binButton.timesOn', binButton.timesOn);
    psychoJS.experiment.addData('binButton.timesOff', binButton.timesOff);
    psychoJS.experiment.addData('trainSlider.response', trainSlider.getRating());
    psychoJS.experiment.addData('trainSlider.rt', trainSlider.getRT());
    psychoJS.experiment.addData('replayBtn_2.numClicks', replayBtn_2.numClicks);
    psychoJS.experiment.addData('replayBtn_2.timesOn', replayBtn_2.timesOn);
    psychoJS.experiment.addData('replayBtn_2.timesOff', replayBtn_2.timesOff);
    psychoJS.experiment.addData('continueBtn_4.numClicks', continueBtn_4.numClicks);
    psychoJS.experiment.addData('continueBtn_4.timesOn', continueBtn_4.timesOn);
    psychoJS.experiment.addData('continueBtn_4.timesOff', continueBtn_4.timesOff);
    // the Routine "trainingTrial" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var mainRoutineMaxDurationReached;
var mainRoutineMaxDuration;
var mainRoutineComponents;
function mainRoutineRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'mainRoutine' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // keep track of whether this Routine was forcibly ended
    routineForceEnded = false;
    mainRoutineClock.reset();
    routineTimer.reset();
    mainRoutineMaxDurationReached = false;
    // update component parameters for each repeat
    // reset continueBtn_6 to account for continued clicks & clear times on/off
    continueBtn_6.reset()
    psychoJS.experiment.addData('mainRoutine.started', globalClock.getTime());
    mainRoutineMaxDuration = null
    // keep track of which components have finished
    mainRoutineComponents = [];
    mainRoutineComponents.push(mainInstructions);
    mainRoutineComponents.push(continueBtn_6);
    
    for (const thisComponent of mainRoutineComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function mainRoutineRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'mainRoutine' ---
    // get current time
    t = mainRoutineClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *mainInstructions* updates
    if (t >= 0.0 && mainInstructions.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      mainInstructions.tStart = t;  // (not accounting for frame time here)
      mainInstructions.frameNStart = frameN;  // exact frame index
      
      mainInstructions.setAutoDraw(true);
    }
    
    
    // if mainInstructions is active this frame...
    if (mainInstructions.status === PsychoJS.Status.STARTED) {
    }
    
    
    // *continueBtn_6* updates
    if (t >= 0 && continueBtn_6.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      continueBtn_6.tStart = t;  // (not accounting for frame time here)
      continueBtn_6.frameNStart = frameN;  // exact frame index
      
      continueBtn_6.setAutoDraw(true);
    }
    
    
    // if continueBtn_6 is active this frame...
    if (continueBtn_6.status === PsychoJS.Status.STARTED) {
    }
    
    if (continueBtn_6.status === PsychoJS.Status.STARTED) {
      // check whether continueBtn_6 has been pressed
      if (continueBtn_6.isClicked) {
        if (!continueBtn_6.wasClicked) {
          // store time of first click
          continueBtn_6.timesOn.push(continueBtn_6.clock.getTime());
          // store time clicked until
          continueBtn_6.timesOff.push(continueBtn_6.clock.getTime());
        } else {
          // update time clicked until;
          continueBtn_6.timesOff[continueBtn_6.timesOff.length - 1] = continueBtn_6.clock.getTime();
        }
        if (!continueBtn_6.wasClicked) {
          // end routine when continueBtn_6 is clicked
          continueRoutine = false;
          
        }
        // if continueBtn_6 is still clicked next frame, it is not a new click
        continueBtn_6.wasClicked = true;
      } else {
        // if continueBtn_6 is clicked next frame, it is a new click
        continueBtn_6.wasClicked = false;
      }
    } else {
      // keep clock at 0 if continueBtn_6 hasn't started / has finished
      continueBtn_6.clock.reset();
      // if continueBtn_6 is clicked next frame, it is a new click
      continueBtn_6.wasClicked = false;
    }
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      routineForceEnded = true;
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of mainRoutineComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function mainRoutineRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'mainRoutine' ---
    for (const thisComponent of mainRoutineComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('mainRoutine.stopped', globalClock.getTime());
    psychoJS.experiment.addData('continueBtn_6.numClicks', continueBtn_6.numClicks);
    psychoJS.experiment.addData('continueBtn_6.timesOn', continueBtn_6.timesOn);
    psychoJS.experiment.addData('continueBtn_6.timesOff', continueBtn_6.timesOff);
    // the Routine "mainRoutine" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var mainTrialMaxDurationReached;
var counterText;
var bin_selected;
var replay_used;
var response_given;
var rt_clock;
var mainTrialMaxDuration;
var mainTrialComponents;
function mainTrialRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'mainTrial' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // keep track of whether this Routine was forcibly ended
    routineForceEnded = false;
    mainTrialClock.reset();
    routineTimer.reset();
    mainTrialMaxDurationReached = false;
    // update component parameters for each repeat
    // Run 'Begin Routine' code from mainLogic
    trialCounter += 1;
    counterText = `${trialCounter} / ${totalTrials}`;
    bin_selected = false;
    replay_used = false;
    rating = 0;
    response_given = false;
    rt_clock = new util.Clock();
    
    // setup some python lists for storing info about the mouse_2
    gotValidClick = false; // until a click is received
    mainSound.isFinished = false;
    mainSound.setValue(stimFile);
    mainSound.setVolume(1.0);
    // reset binButton_2 to account for continued clicks & clear times on/off
    binButton_2.reset()
    mainSlider.reset()
    // reset replayBtn_3 to account for continued clicks & clear times on/off
    replayBtn_3.reset()
    // reset continueBtn_5 to account for continued clicks & clear times on/off
    continueBtn_5.reset()
    trialCounterText.setText(counterText);
    psychoJS.experiment.addData('mainTrial.started', globalClock.getTime());
    mainTrialMaxDuration = null
    // keep track of which components have finished
    mainTrialComponents = [];
    mainTrialComponents.push(mouse_2);
    mainTrialComponents.push(mainSound);
    mainTrialComponents.push(binButton_2);
    mainTrialComponents.push(mainSlider);
    mainTrialComponents.push(replayBtn_3);
    mainTrialComponents.push(continueBtn_5);
    mainTrialComponents.push(trialCounterText);
    
    for (const thisComponent of mainTrialComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


var slider_rating;
function mainTrialRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'mainTrial' ---
    // get current time
    t = mainTrialClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    // Run 'Each Frame' code from mainLogic
    if (binButton_2.isClicked) {
        bin_selected = true;
        mainSlider.reset();
    }
    slider_rating = mainSlider.getRating();
    if (slider_rating) {
        bin_selected = false;
    }
    if (bin_selected) {
        rating = 0;
        response_given = true;
    } else {
        if (slider_rating) {
            rating = slider_rating;
            response_given = true;
        } else {
            response_given = false;
        }
    }
    binButton_2.fillColor = (bin_selected ? "green" : "darkgrey");
    continueBtn_5.opacity = (response_given ? 1.0 : 0.35);
    if (((! replay_used) && replayBtn_3.isClicked)) {
        mainSound.play();
        replay_used = true;
    }
    replayBtn_3.opacity = (replay_used ? 0.35 : 1.0);
    if ((continueBtn_5.isClicked && response_given)) {
        psychoJS.experiment.addData("rating", rating);
        psychoJS.experiment.addData("rt_sec", util.round(rt_clock.getTime(), 4));
        psychoJS.experiment.addData("replay_used", replay_used);
        continueRoutine = false;
    }
    
    if (mainSound.status === STARTED) {
        mainSound.isPlaying = true;
        if (t >= (mainSound.getDuration() + mainSound.tStart)) {
            mainSound.isFinished = true;
        }
    }
    // start/stop mainSound
    if (t >= 0.3 && mainSound.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      mainSound.tStart = t;  // (not accounting for frame time here)
      mainSound.frameNStart = frameN;  // exact frame index
      
      psychoJS.window.callOnFlip(function(){ mainSound.play(); });  // screen flip
      mainSound.status = PsychoJS.Status.STARTED;
    }
    if (mainSound.status === PsychoJS.Status.STARTED && Boolean(false) || mainSound.isFinished) {
      // keep track of stop time/frame for later
      mainSound.tStop = t;  // not accounting for scr refresh
      mainSound.frameNStop = frameN;  // exact frame index
      // update status
      mainSound.status = PsychoJS.Status.FINISHED;
      // stop playback
      mainSound.stop();
    }
    
    // *binButton_2* updates
    if (t >= 0 && binButton_2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      binButton_2.tStart = t;  // (not accounting for frame time here)
      binButton_2.frameNStart = frameN;  // exact frame index
      
      binButton_2.setAutoDraw(true);
    }
    
    
    // if binButton_2 is active this frame...
    if (binButton_2.status === PsychoJS.Status.STARTED) {
    }
    
    if (binButton_2.status === PsychoJS.Status.STARTED) {
      // check whether binButton_2 has been pressed
      if (binButton_2.isClicked) {
        if (!binButton_2.wasClicked) {
          // store time of first click
          binButton_2.timesOn.push(binButton_2.clock.getTime());
          // store time clicked until
          binButton_2.timesOff.push(binButton_2.clock.getTime());
        } else {
          // update time clicked until;
          binButton_2.timesOff[binButton_2.timesOff.length - 1] = binButton_2.clock.getTime();
        }
        if (!binButton_2.wasClicked) {
          
        }
        // if binButton_2 is still clicked next frame, it is not a new click
        binButton_2.wasClicked = true;
      } else {
        // if binButton_2 is clicked next frame, it is a new click
        binButton_2.wasClicked = false;
      }
    } else {
      // keep clock at 0 if binButton_2 hasn't started / has finished
      binButton_2.clock.reset();
      // if binButton_2 is clicked next frame, it is a new click
      binButton_2.wasClicked = false;
    }
    
    // *mainSlider* updates
    if (t >= 0.0 && mainSlider.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      mainSlider.tStart = t;  // (not accounting for frame time here)
      mainSlider.frameNStart = frameN;  // exact frame index
      
      mainSlider.setAutoDraw(true);
    }
    
    
    // if mainSlider is active this frame...
    if (mainSlider.status === PsychoJS.Status.STARTED) {
    }
    
    
    // *replayBtn_3* updates
    if (t >= 0 && replayBtn_3.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      replayBtn_3.tStart = t;  // (not accounting for frame time here)
      replayBtn_3.frameNStart = frameN;  // exact frame index
      
      replayBtn_3.setAutoDraw(true);
    }
    
    
    // if replayBtn_3 is active this frame...
    if (replayBtn_3.status === PsychoJS.Status.STARTED) {
    }
    
    if (replayBtn_3.status === PsychoJS.Status.STARTED) {
      // check whether replayBtn_3 has been pressed
      if (replayBtn_3.isClicked) {
        if (!replayBtn_3.wasClicked) {
          // store time of first click
          replayBtn_3.timesOn.push(replayBtn_3.clock.getTime());
          // store time clicked until
          replayBtn_3.timesOff.push(replayBtn_3.clock.getTime());
        } else {
          // update time clicked until;
          replayBtn_3.timesOff[replayBtn_3.timesOff.length - 1] = replayBtn_3.clock.getTime();
        }
        if (!replayBtn_3.wasClicked) {
          
        }
        // if replayBtn_3 is still clicked next frame, it is not a new click
        replayBtn_3.wasClicked = true;
      } else {
        // if replayBtn_3 is clicked next frame, it is a new click
        replayBtn_3.wasClicked = false;
      }
    } else {
      // keep clock at 0 if replayBtn_3 hasn't started / has finished
      replayBtn_3.clock.reset();
      // if replayBtn_3 is clicked next frame, it is a new click
      replayBtn_3.wasClicked = false;
    }
    
    // *continueBtn_5* updates
    if (t >= 0 && continueBtn_5.status === PsychoJS.Status.NOT_STARTED) {
      // update params
      continueBtn_5.setOpacity(1.0, false);
      // keep track of start time/frame for later
      continueBtn_5.tStart = t;  // (not accounting for frame time here)
      continueBtn_5.frameNStart = frameN;  // exact frame index
      
      continueBtn_5.setAutoDraw(true);
    }
    
    
    // if continueBtn_5 is active this frame...
    if (continueBtn_5.status === PsychoJS.Status.STARTED) {
      // update params
      continueBtn_5.setOpacity(1.0, false);
    }
    
    if (continueBtn_5.status === PsychoJS.Status.STARTED) {
      // check whether continueBtn_5 has been pressed
      if (continueBtn_5.isClicked) {
        if (!continueBtn_5.wasClicked) {
          // store time of first click
          continueBtn_5.timesOn.push(continueBtn_5.clock.getTime());
          // store time clicked until
          continueBtn_5.timesOff.push(continueBtn_5.clock.getTime());
        } else {
          // update time clicked until;
          continueBtn_5.timesOff[continueBtn_5.timesOff.length - 1] = continueBtn_5.clock.getTime();
        }
        if (!continueBtn_5.wasClicked) {
          
        }
        // if continueBtn_5 is still clicked next frame, it is not a new click
        continueBtn_5.wasClicked = true;
      } else {
        // if continueBtn_5 is clicked next frame, it is a new click
        continueBtn_5.wasClicked = false;
      }
    } else {
      // keep clock at 0 if continueBtn_5 hasn't started / has finished
      continueBtn_5.clock.reset();
      // if continueBtn_5 is clicked next frame, it is a new click
      continueBtn_5.wasClicked = false;
    }
    
    // *trialCounterText* updates
    if (t >= 0.0 && trialCounterText.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      trialCounterText.tStart = t;  // (not accounting for frame time here)
      trialCounterText.frameNStart = frameN;  // exact frame index
      
      trialCounterText.setAutoDraw(true);
    }
    
    
    // if trialCounterText is active this frame...
    if (trialCounterText.status === PsychoJS.Status.STARTED) {
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      routineForceEnded = true;
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of mainTrialComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function mainTrialRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'mainTrial' ---
    for (const thisComponent of mainTrialComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('mainTrial.stopped', globalClock.getTime());
    // store data for psychoJS.experiment (ExperimentHandler)
    mainSound.stop();  // ensure sound has stopped at end of Routine
    psychoJS.experiment.addData('binButton_2.numClicks', binButton_2.numClicks);
    psychoJS.experiment.addData('binButton_2.timesOn', binButton_2.timesOn);
    psychoJS.experiment.addData('binButton_2.timesOff', binButton_2.timesOff);
    psychoJS.experiment.addData('mainSlider.response', mainSlider.getRating());
    psychoJS.experiment.addData('mainSlider.rt', mainSlider.getRT());
    psychoJS.experiment.addData('replayBtn_3.numClicks', replayBtn_3.numClicks);
    psychoJS.experiment.addData('replayBtn_3.timesOn', replayBtn_3.timesOn);
    psychoJS.experiment.addData('replayBtn_3.timesOff', replayBtn_3.timesOff);
    psychoJS.experiment.addData('continueBtn_5.numClicks', continueBtn_5.numClicks);
    psychoJS.experiment.addData('continueBtn_5.timesOn', continueBtn_5.timesOn);
    psychoJS.experiment.addData('continueBtn_5.timesOff', continueBtn_5.timesOff);
    // the Routine "mainTrial" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var breakScreenMaxDurationReached;
var show_break;
var breakScreenMaxDuration;
var breakScreenComponents;
function breakScreenRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'breakScreen' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // keep track of whether this Routine was forcibly ended
    routineForceEnded = false;
    breakScreenClock.reset();
    routineTimer.reset();
    breakScreenMaxDurationReached = false;
    // update component parameters for each repeat
    // Run 'Begin Routine' code from breakLogic
    show_break = (trialCounter === 44);
    if ((! show_break)) {
        continueRoutine = false;
    }
    
    // reset breakContinueButton to account for continued clicks & clear times on/off
    breakContinueButton.reset()
    psychoJS.experiment.addData('breakScreen.started', globalClock.getTime());
    breakScreenMaxDuration = null
    // keep track of which components have finished
    breakScreenComponents = [];
    breakScreenComponents.push(breakText);
    breakScreenComponents.push(breakContinueButton);
    
    for (const thisComponent of breakScreenComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function breakScreenRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'breakScreen' ---
    // get current time
    t = breakScreenClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *breakText* updates
    if (t >= 0.0 && breakText.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      breakText.tStart = t;  // (not accounting for frame time here)
      breakText.frameNStart = frameN;  // exact frame index
      
      breakText.setAutoDraw(true);
    }
    
    
    // if breakText is active this frame...
    if (breakText.status === PsychoJS.Status.STARTED) {
    }
    
    
    // *breakContinueButton* updates
    if (t >= 0 && breakContinueButton.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      breakContinueButton.tStart = t;  // (not accounting for frame time here)
      breakContinueButton.frameNStart = frameN;  // exact frame index
      
      breakContinueButton.setAutoDraw(true);
    }
    
    
    // if breakContinueButton is active this frame...
    if (breakContinueButton.status === PsychoJS.Status.STARTED) {
    }
    
    if (breakContinueButton.status === PsychoJS.Status.STARTED) {
      // check whether breakContinueButton has been pressed
      if (breakContinueButton.isClicked) {
        if (!breakContinueButton.wasClicked) {
          // store time of first click
          breakContinueButton.timesOn.push(breakContinueButton.clock.getTime());
          // store time clicked until
          breakContinueButton.timesOff.push(breakContinueButton.clock.getTime());
        } else {
          // update time clicked until;
          breakContinueButton.timesOff[breakContinueButton.timesOff.length - 1] = breakContinueButton.clock.getTime();
        }
        if (!breakContinueButton.wasClicked) {
          // end routine when breakContinueButton is clicked
          continueRoutine = false;
          
        }
        // if breakContinueButton is still clicked next frame, it is not a new click
        breakContinueButton.wasClicked = true;
      } else {
        // if breakContinueButton is clicked next frame, it is a new click
        breakContinueButton.wasClicked = false;
      }
    } else {
      // keep clock at 0 if breakContinueButton hasn't started / has finished
      breakContinueButton.clock.reset();
      // if breakContinueButton is clicked next frame, it is a new click
      breakContinueButton.wasClicked = false;
    }
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      routineForceEnded = true;
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of breakScreenComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function breakScreenRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'breakScreen' ---
    for (const thisComponent of breakScreenComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('breakScreen.stopped', globalClock.getTime());
    psychoJS.experiment.addData('breakContinueButton.numClicks', breakContinueButton.numClicks);
    psychoJS.experiment.addData('breakContinueButton.timesOn', breakContinueButton.timesOn);
    psychoJS.experiment.addData('breakContinueButton.timesOff', breakContinueButton.timesOff);
    // the Routine "breakScreen" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var surveyRoutineMaxDurationReached;
var surveyRoutineMaxDuration;
var surveyRoutineComponents;
function surveyRoutineRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'surveyRoutine' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // keep track of whether this Routine was forcibly ended
    routineForceEnded = false;
    surveyRoutineClock.reset();
    routineTimer.reset();
    surveyRoutineMaxDurationReached = false;
    // update component parameters for each repeat
    // reset submitBtn to account for continued clicks & clear times on/off
    submitBtn.reset()
    psychoJS.experiment.addData('surveyRoutine.started', globalClock.getTime());
    surveyRoutineMaxDuration = null
    // keep track of which components have finished
    surveyRoutineComponents = [];
    surveyRoutineComponents.push(surveyForm);
    surveyRoutineComponents.push(submitBtn);
    
    for (const thisComponent of surveyRoutineComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


var _pj;
var formData;
var all_required_answered;
function surveyRoutineRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'surveyRoutine' ---
    // get current time
    t = surveyRoutineClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    // Run 'Each Frame' code from surveyLogic
    var _pj;
    function _pj_snippets(container) {
        function in_es6(left, right) {
            if (((right instanceof Array) || ((typeof right) === "string"))) {
                return (right.indexOf(left) > (- 1));
            } else {
                if (((right instanceof Map) || (right instanceof Set) || (right instanceof WeakMap) || (right instanceof WeakSet))) {
                    return right.has(left);
                } else {
                    return (left in right);
                }
            }
        }
        container["in_es6"] = in_es6;
        return container;
    }
    _pj = {};
    _pj_snippets(_pj);
    formData = surveyForm.getData();
    all_required_answered = true;
    for (var item, _pj_c = 0, _pj_a = formData, _pj_b = _pj_a.length; (_pj_c < _pj_b); _pj_c += 1) {
        item = _pj_a[_pj_c];
        if (_pj.in_es6(item["type"], ["heading", "description"])) {
            continue;
        }
        is_required = (! _pj.in_es6(item["required"], [0, "0", false, "False", "false"]));
        if ((! is_required)) {
            continue;
        }
        resp = item["response"];
        if ((item["type"] === "free text")) {
            answered = (resp ? true : false);
        } else {
            answered = (((resp === 0) || resp) ? true : false);
        }
        if ((! answered)) {
            all_required_answered = false;
            break;
        }
    }
    submitBtn.opacity = (all_required_answered ? 1.0 : 0.35);
    if ((submitBtn.isClicked && all_required_answered)) {
        continueRoutine = false;
    }
    
    
    // *surveyForm* updates
    if (t >= 0.0 && surveyForm.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      surveyForm.tStart = t;  // (not accounting for frame time here)
      surveyForm.frameNStart = frameN;  // exact frame index
      
      surveyForm.setAutoDraw(true);
    }
    
    
    // if surveyForm is active this frame...
    if (surveyForm.status === PsychoJS.Status.STARTED) {
    }
    
    
    // *submitBtn* updates
    if (t >= 0 && submitBtn.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      submitBtn.tStart = t;  // (not accounting for frame time here)
      submitBtn.frameNStart = frameN;  // exact frame index
      
      submitBtn.setAutoDraw(true);
    }
    
    
    // if submitBtn is active this frame...
    if (submitBtn.status === PsychoJS.Status.STARTED) {
    }
    
    if (submitBtn.status === PsychoJS.Status.STARTED) {
      // check whether submitBtn has been pressed
      if (submitBtn.isClicked) {
        if (!submitBtn.wasClicked) {
          // store time of first click
          submitBtn.timesOn.push(submitBtn.clock.getTime());
          // store time clicked until
          submitBtn.timesOff.push(submitBtn.clock.getTime());
        } else {
          // update time clicked until;
          submitBtn.timesOff[submitBtn.timesOff.length - 1] = submitBtn.clock.getTime();
        }
        if (!submitBtn.wasClicked) {
          
        }
        // if submitBtn is still clicked next frame, it is not a new click
        submitBtn.wasClicked = true;
      } else {
        // if submitBtn is clicked next frame, it is a new click
        submitBtn.wasClicked = false;
      }
    } else {
      // keep clock at 0 if submitBtn hasn't started / has finished
      submitBtn.clock.reset();
      // if submitBtn is clicked next frame, it is a new click
      submitBtn.wasClicked = false;
    }
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      routineForceEnded = true;
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of surveyRoutineComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function surveyRoutineRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'surveyRoutine' ---
    for (const thisComponent of surveyRoutineComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('surveyRoutine.stopped', globalClock.getTime());
    surveyForm.addDataToExp(psychoJS.experiment, 'rows');
    psychoJS.experiment.addData('submitBtn.numClicks', submitBtn.numClicks);
    psychoJS.experiment.addData('submitBtn.timesOn', submitBtn.timesOn);
    psychoJS.experiment.addData('submitBtn.timesOff', submitBtn.timesOff);
    // the Routine "surveyRoutine" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var thankYouScreenMaxDurationReached;
var thankYouScreenMaxDuration;
var thankYouScreenComponents;
function thankYouScreenRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'thankYouScreen' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // keep track of whether this Routine was forcibly ended
    routineForceEnded = false;
    thankYouScreenClock.reset();
    routineTimer.reset();
    thankYouScreenMaxDurationReached = false;
    // update component parameters for each repeat
    // Run 'Begin Routine' code from code_2
    psychoJS._saveResults = 0;
    
    let filename = psychoJS._experiment._experimentName + "_" + psychoJS._experiment._datetime + ".csv";
    
    let dataObj = psychoJS._experiment._trialsData;
    
    let data = [Object.keys(dataObj[0])].concat(dataObj).map(it => {
        return Object.values(it).toString()
    }).join('\n')
    
    console.log('Saving data...');
    
    fetch("https://pipe.jspsych.org/api/data/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "*/*",
      },
      body: JSON.stringify({
        experimentID: "3X3aBX0VpoTG",
        filename: filename,
        data: data,
      }),
    }).then(response => response.json()).then(data => {
        console.log(data);
        quitPsychoJS();
    })
            
    
    
    // reset closeButton to account for continued clicks & clear times on/off
    closeButton.reset()
    psychoJS.experiment.addData('thankYouScreen.started', globalClock.getTime());
    thankYouScreenMaxDuration = null
    // keep track of which components have finished
    thankYouScreenComponents = [];
    thankYouScreenComponents.push(thankYouText);
    thankYouScreenComponents.push(closeButton);
    
    for (const thisComponent of thankYouScreenComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function thankYouScreenRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'thankYouScreen' ---
    // get current time
    t = thankYouScreenClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *thankYouText* updates
    if (t >= 0.0 && thankYouText.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      thankYouText.tStart = t;  // (not accounting for frame time here)
      thankYouText.frameNStart = frameN;  // exact frame index
      
      thankYouText.setAutoDraw(true);
    }
    
    
    // if thankYouText is active this frame...
    if (thankYouText.status === PsychoJS.Status.STARTED) {
    }
    
    
    // *closeButton* updates
    if (t >= 5 && closeButton.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      closeButton.tStart = t;  // (not accounting for frame time here)
      closeButton.frameNStart = frameN;  // exact frame index
      
      closeButton.setAutoDraw(true);
    }
    
    
    // if closeButton is active this frame...
    if (closeButton.status === PsychoJS.Status.STARTED) {
    }
    
    if (closeButton.status === PsychoJS.Status.STARTED) {
      // check whether closeButton has been pressed
      if (closeButton.isClicked) {
        if (!closeButton.wasClicked) {
          // store time of first click
          closeButton.timesOn.push(closeButton.clock.getTime());
          // store time clicked until
          closeButton.timesOff.push(closeButton.clock.getTime());
        } else {
          // update time clicked until;
          closeButton.timesOff[closeButton.timesOff.length - 1] = closeButton.clock.getTime();
        }
        if (!closeButton.wasClicked) {
          // end routine when closeButton is clicked
          continueRoutine = false;
          
        }
        // if closeButton is still clicked next frame, it is not a new click
        closeButton.wasClicked = true;
      } else {
        // if closeButton is clicked next frame, it is a new click
        closeButton.wasClicked = false;
      }
    } else {
      // keep clock at 0 if closeButton hasn't started / has finished
      closeButton.clock.reset();
      // if closeButton is clicked next frame, it is a new click
      closeButton.wasClicked = false;
    }
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      routineForceEnded = true;
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of thankYouScreenComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function thankYouScreenRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'thankYouScreen' ---
    for (const thisComponent of thankYouScreenComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('thankYouScreen.stopped', globalClock.getTime());
    psychoJS.experiment.addData('closeButton.numClicks', closeButton.numClicks);
    psychoJS.experiment.addData('closeButton.timesOn', closeButton.timesOn);
    psychoJS.experiment.addData('closeButton.timesOff', closeButton.timesOff);
    // the Routine "thankYouScreen" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


function importConditions(currentLoop) {
  return async function () {
    psychoJS.importAttributes(currentLoop.getCurrentTrial());
    return Scheduler.Event.NEXT;
    };
}


async function quitPsychoJS(message, isCompleted) {
  // Check for and save orphaned data
  if (psychoJS.experiment.isEntryEmpty()) {
    psychoJS.experiment.nextEntry();
  }
  psychoJS.window.close();
  psychoJS.quit({message: message, isCompleted: isCompleted});
  
  return Scheduler.Event.QUIT;
}
