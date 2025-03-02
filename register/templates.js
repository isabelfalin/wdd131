function participantTemplate(pnumber){
    let participantTemplate = `
        <section class="participant${pnumber}">
            <p>Participant ${pnumber}</p>
            <div class="item">
              <label for="fname"> First Name<span>*</span></label>
              <input id="fname${pnumber}" type="text" name="fname${pnumber}" value="" required />
            </div>
            <div class="item activities">
              <label for="activity">Activity #<span>*</span></label>
              <input id="activity${pnumber}" type="text" name="activity${pnumber}" />
            </div>
            <div class="item">
              <label for="fee">Fee ($)<span>*</span></label>
              <input id="fee${pnumber}" type="number" name="fee${pnumber}" />
            </div>
            <div class="item">
              <label for="date">Desired Date <span>*</span></label>
              <input id="date${pnumber}" type="date" name="date${pnumber}" />
            </div>
            <div class="item">
              <p>Grade</p>
              <select id="grade${pnumber}" name="grade${pnumber}">
                <option selected value="" disabled selected></option>
                <option value="1">1st</option>
                <option value="2">2nd</option>
                <option value="3">3rd</option>
                <option value="4">4th</option>
                <option value="5">5th</option>
                <option value="6">6th</option>
                <option value="7">7th</option>
                <option value="8">8th</option>
                <option value="9">9th</option>
                <option value="10">10th</option>
                <option value="11">11th</option>
                <option value="12">12th</option>
              </select>
            </div>
          </section>`;
          return participantTemplate;
}

function successTemplate(info){
    let htmlTemplate = `<p>Thank you ${info.name} for registering.</p>
    <p>You have registered ${info.addParticapants} particapants </p>
    <p>and owe $${info.total} in fees.</p>`;

    return htmlTemplate;

}

export {participantTemplate, successTemplate};