
// For section 1 image Slider
const mainImg = document.querySelector('.main_image img');
const thumbs = document.querySelectorAll('.thumb');
const prevBtnImg = document.querySelector('.arrow.left');
const nextBtnImg = document.querySelector('.arrow.right');

let currentIndex = 0;

function updateGallery(index) {
  thumbs.forEach(thumb => thumb.classList.remove('active'));
  thumbs[index].classList.add('active');

  const newSrc = thumbs[index].getAttribute('data-src') || `images/product-${index + 1}.jpg`;
  mainImg.src = newSrc;

  currentIndex = index;
}

nextBtnImg.addEventListener('click', () => {
  let nextIndex = (currentIndex + 1 === thumbs.length) ? 0 : currentIndex + 1;
  updateGallery(nextIndex);
});

prevBtnImg.addEventListener('click', () => {
  let prevIndex = (currentIndex === 0) ? thumbs.length - 1 : currentIndex - 1;
  updateGallery(prevIndex);
});

thumbs.forEach((thumb, index) => {
  thumb.addEventListener('click', () => {
    updateGallery(index);
  });
});


////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//Added navigation to the contact us form on Contact button click
// const contactBtn = document.getElementById("contactBtn");
// const contactSection = document.getElementById("contact");

// contactBtn.addEventListener("click", () => {
//   contactSection.scrollIntoView({
//     behavior: "smooth"
//   });
// });




//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


// For Section-5 Card slider Button

document.addEventListener("DOMContentLoaded", () => {

  const container = document.querySelector(".apps-cards");
  const leftBtn = document.querySelector(".arrow-btn.left");
  const rightBtn = document.querySelector(".arrow-btn.right");

  leftBtn.addEventListener("click", () => {
    container.scrollBy({ left: -300, behavior: "smooth" });
  });

  rightBtn.addEventListener("click", () => {
    container.scrollBy({ left: 300, behavior: "smooth" });
  });

});
const tab = document.querySelectorAll(".tab");

tab.forEach(tab => {
  tab.addEventListener("click", () => {
    document.querySelector(".tab.active").classList.remove("active");
    tab.classList.add("active");
  });
});


////////////////////////////////////////////////////////////////////

//For section 6 tab change

const steps = [
  {
    title: "Step 0",
  },
  {
    title: "Step 1",
  },
  {
    title: "Step 2",
  },
  {
    title: "Step 3",
  },
  {
    title: "Step 4",
  },
  {
    title: "Step 5",
  },
  {
    title: "Step 6",
  },
  {
    title: "Step 7",
  }
];

let currentStep = 0;

const processTexts = document.querySelectorAll('.process-text');
const processImages = document.querySelectorAll('.slide');
const prevBtn = document.querySelector('.prev');
const nextBtn = document.querySelector('.next');
const tabs = document.querySelectorAll('.tab');
const activeTabName = document.querySelector('.active-tab-name');
const sliderImages = document.querySelectorAll('.slide');

function showStep(index) {
  processTexts.forEach((el, i) => {
    el.style.display = i === index ? 'block' : 'none';
  });

  sliderImages.forEach((img, i) => {
    img.style.display = i === index ? 'block' : 'none';
  });

  tabs.forEach((tab, i) => {
    tab.classList.toggle('active', i === index);
  });

  if (window.innerWidth <= 768) {
    const tabName = tabs[index].getAttribute('data-name');
    activeTabName.textContent = tabName;
  }
}

showStep(currentStep);

nextBtn.addEventListener('click', () => {
  if (currentStep < steps.length - 1) {
    currentStep++;
    showStep(currentStep);
  }
});

nextBtn.addEventListener('click', () => {
  if (currentStep < steps.length - 1) {
    currentStep++;
    showStep(currentStep);
  }
});


prevBtn.addEventListener('click', () => {
  if (currentStep > 0) {
    currentStep--;
    showStep(currentStep);
  }
});


tabs.forEach((tab, i) => {
  tab.addEventListener('click', () => {
    currentStep = i;
    showStep(currentStep);
  });
});

function updateActiveTabNameVisibility() {
  if (window.innerWidth <= 768) {
    document.querySelector('.active-tab-name').style.display = 'block';
    const tabName = tabs[currentStep].getAttribute('data-name');
    activeTabName.textContent = tabName;
  } else {
    document.querySelector('.active-tab-name').style.display = 'none';
  }
}

updateActiveTabNameVisibility();

window.addEventListener('resize', () => {
  updateActiveTabNameVisibility();
});


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

function openModal(modalId) {
  document.getElementById(modalId).classList.add('active');
  document.body.style.overflow = 'hidden';
}

function closeModal(modalId) {
  const modal = document.getElementById(modalId);

  modal.classList.remove('active');
  document.body.style.overflow = 'auto';

  const form = modal.querySelector('form');
  if (form) {
    form.reset();
  }

  const allInputs = modal.querySelectorAll('input');
  allInputs.forEach(input => {
    input.value = '';
  });

  const submitBtn = modal.querySelector('.download-btn-submit');
  if (submitBtn) {
    submitBtn.disabled = true;
    submitBtn.style.background = '#DDE2EE';
    submitBtn.style.cursor = 'not-allowed';
  }
}

document.querySelector('.download_tech').addEventListener('click', () => {
  openModal('downloadModal');
});

document.querySelector('.cta_feature button').addEventListener('click', () => {
  openModal('quoteModal');
});

window.addEventListener('click', (e) => {
  if (e.target.classList.contains('modal-overlay')) {
    const activeModal = document.querySelector('.modal-overlay.active');
    if (activeModal) {
      closeModal(activeModal.id);
    }
  }
});