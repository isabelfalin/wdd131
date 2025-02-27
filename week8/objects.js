const aCourse = {
    code: "CSE121b",
    name: "Javascript Language",
    sections: [
        
      {
        sectionNum: 1,
        roomNum: "STC 353",
        enrolled: 26,
        days: "TTh",
        instructor: "Bro T",
      },
      {
        sectionNum: 2,
        roomNum: "STC 347",
        enrolled: 25,
        days: "TTh",
        instructor: "Sis A",
      },
    ],
    init: function(){
        this.setCourseInfo()
        this.renderSections()
    },

    setCourseInfo: function(){
        const courseName = document.querySelector("#courseName");
        const coursecode = document.querySelector("#courseCode");
        courseName.textContent = this.name;
        coursecode.textContent = this.code;
    },
    renderSections: function(){
        const html = this.sections.map(
            (section) => `<tr>
            <td>${section.sectionNum}</td>
            <td>${section.roomNum}</td>
            <td>${section.enrolled}</td>
            <td>${section.days}</td>
            <td>${section.instructor}</td></tr>`
          );
          document.querySelector("#sections").innerHTML = html.join("");
    },

    changeEnrollment: function (sectionNum, add = true) {
      // find the right section...Array.findIndex will work here
      const sectionIndex = this.sections.findIndex(
        (section) => section.sectionNum == sectionNum
      );
      if (sectionIndex >= 0) {
        if (add) {
          this.sections[sectionIndex].enrolled++;
        } else {
          this.sections[sectionIndex].enrolled--;
        }
        this.renderSections();
      }
    },
  };

  aCourse.init()

document.querySelector("#enrollStudent").addEventListener("click", function () {
    const sectionNum = document.querySelector("#sectionNumber").value;
    aCourse.changeEnrollment(sectionNum);
  });
  document.querySelector("#dropStudent").addEventListener("click", function () {
    const sectionNum = document.querySelector("#sectionNumber").value;
    aCourse.changeEnrollment(sectionNum, false);
  });
  

  