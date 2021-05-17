function shouldJab (healthworker, critical, patient, date) {
	return isHealthworker() 
    ? !isCritical() 
    : shouldBeVaccinatedRelated();

  function isHealthworker() {
    return healthworker;
  }
  function isCritical() {
    return critical;
  }

  function shouldBeVaccinatedRelatedToAgeAndDate() {
    return patient.age > 75
      || patient.age > 60 && date > 430
      || patient.age > 40 && date > 700
      || date > 1000;
  }

  function shouldBeVaccinatedRelated() {
    return isCritical() || shouldBeVaccinatedRelatedToAgeAndDate();
  }
}

