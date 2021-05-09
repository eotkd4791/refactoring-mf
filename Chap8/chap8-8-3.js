// 8.3 문장을 함수로 옮기기

/**
 * Init
 */

function renderPerson(outStream, person) {
  const result = [];
  result.push(`<p>${person.name}</p>`);
  result.push(renderPhoto(person.photo));
  result.push(`<p>제목: ${person.photo.title}</p>`);
  result.push(emitPhotoData(person.photo));
  return result.join('\n');
}

function photoDiv(p) {
  return [
    '<div>',
    `<p>제목: ${p.title}</p>`,
    emitPhotoData(p),
    '</div>'
  ].join('\n');
}

function emitPhotoData(aPhoto) {
  const result = [];
  result.push(`<p>위치: ${aPhoto.location}</p>`);
  result.push(`<p>날짜: ${aPhoto.date.toDateString()}</p>`);
  return result.join('\n');
}

/**
 * Refactoring
 */

// #1
function renderPerson(outStream, person) {
  const result = [];
  result.push(`<p>${person.name}</p>`);
  result.push(renderPhoto(person.photo));
  result.push(zznew(person.photo));
  return result.join('\n');
}

function photoDiv(p) {
  return [
    '<div>',
    `<p>제목: ${p.title}</p>`,
    zznew(p),
    '</div>'
  ].join('\n');
}

function zznew(p) {
  return [
    `<p>제목: ${p.title}</p>`,
    emitPhotoData(p),
  ].join('\n');
}

// #2
function zznew(p) {
  return [
    `<p>제목: ${p.title}</p>`,
    `<p>위치: ${p.location}</p>`,
    `<p>날짜: ${p.date.toDateString()}</p>`,
  ].join('\n');
}

// #3
function renderPerson(outStream, person) {
  const result = [];
  result.push(`<p>${person.name}</p>`);
  result.push(renderPhoto(person.photo));
  result.push(emitPhotoData(person.photo));
  return result.join('\n');
}

function photoDiv(p) {
  return [
    '<div>',
    emitPhotoData(p),
    '</div>'
  ].join('\n');
}

function emitPhotoData(aPhoto) {
  return [
    `<p>제목: ${aPhoto.title}</p>`,
    `<p>위치: ${aPhoto.location}</p>`,
    `<p>날짜: ${aPhoto.date.toDateString()}</p>`,
  ].join('\n');
}