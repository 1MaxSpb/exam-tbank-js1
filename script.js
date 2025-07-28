const editableElements = document.querySelectorAll('[contenteditable]');
window.addEventListener('DOMContentLoaded', () => {
  editableElements.forEach((el, idx) => {
    const saved = localStorage.getItem('cv_' + idx);
    if (saved) el.innerText = saved;
  });
  const savedPhoto = localStorage.getItem('cv_photo');
  if (savedPhoto) {
    document.getElementById('profile-photo').style.backgroundImage = `url(${savedPhoto})`;
  }
});

editableElements.forEach((el, idx) => {
  el.addEventListener('input', () => {
    localStorage.setItem('cv_' + idx, el.innerText);
    el.classList.add('edited');
    setTimeout(() => el.classList.remove('edited'), 300);
  });
});

function createRipple(event) {
  const button = event.currentTarget;
  const circle = document.createElement('span');
  const diameter = Math.max(button.clientWidth, button.clientHeight);
  const radius = diameter / 2;
  circle.style.width = circle.style.height = `${diameter}px`;
  circle.style.left = `${event.clientX - button.getBoundingClientRect().left - radius}px`;
  circle.style.top = `${event.clientY - button.getBoundingClientRect().top - radius}px`;
  circle.classList.add('ripple-effect');
  button.appendChild(circle);
  circle.addEventListener('animationend', () => {
    circle.remove();
  });
}

document.querySelectorAll('.ripple').forEach(btn => {
  btn.addEventListener('click', createRipple);
});

const downloadBtn = document.getElementById('download-btn');
downloadBtn.addEventListener('click', function(e) {
  html2canvas(document.getElementById('resume'), { scale: 2 }).then(canvas => {
    const imgData = canvas.toDataURL('image/png');
    const pdf = new window.jspdf.jsPDF({ unit: 'mm', format: 'a4' });
    const pageWidth = 210;
    const pageHeight = 297;
    const imgProps = pdf.getImageProperties(imgData);
    let pdfWidth = pageWidth - 10;
    let pdfHeight = (imgProps.height * pdfWidth) / imgProps.width;
    let position = 0;
    if (pdfHeight < pageHeight) {
      pdf.addImage(imgData, 'PNG', 5, 5, pdfWidth, pdfHeight);
    } else {
      while (position < pdfHeight) {
        pdf.addImage(imgData, 'PNG', 5, 5 - position, pdfWidth, pdfHeight);
        position += pageHeight - 10;
        if (position < pdfHeight) pdf.addPage();
      }
    }
    pdf.save('resume.pdf');
  });
});

const photoBtn = document.getElementById('photo-btn');
const photoInput = document.getElementById('photo-input');
const profilePhoto = document.getElementById('profile-photo');
photoBtn.addEventListener('click', () => {
  photoInput.click();
});
photoInput.addEventListener('change', (e) => {
  const file = e.target.files[0];
  if (!file) return;
  const reader = new FileReader();
  reader.onload = function(ev) {
    profilePhoto.style.backgroundImage = `url(${ev.target.result})`;
    localStorage.setItem('cv_photo', ev.target.result);
  };
  reader.readAsDataURL(file);
}); 