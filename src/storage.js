import fs from 'node:fs';

const TRAINEE_DATA_FILE_PATH = '../data/trainees.json';
const COURSE_DATA_FILE_PATH = '../data/Courses.json';

export function loadTraineeData() {
  const fileContent = fs.readFileSync(TRAINEE_DATA_FILE_PATH, 'utf-8');
  return JSON.parse(fileContent);


JSON.parse will convert the JSON string into a JavaScript.
 
export function saveTraineeData(updatedTrainees) {
  const traineeSavedData = JSON.stringify(updatedTrainees, null, 2);
  fs.writeFileSync(TRAINEE_DATA_FILE_PATH, traineeSavedData, 'utf-8');
}

export function loadCourseData() {
  const fileContent = fs.readFileSync(COURSE_DATA_FILE_PATH, 'utf-8');
  return JSON.parse(fileContent);
}

export function saveCourseData(updatedCourses) {
  const courseSavedData = JSON.stringify(updatedCourses, null, 2);
  fs.writeFileSync(COURSE_DATA_FILE_PATH, courseSavedData, 'utf-8');
}
