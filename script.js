//Added navigation to the contact us form on Contact button click
// const contactBtn = document.getElementById("contactBtn");
// const contactSection = document.getElementById("contact");

// contactBtn.addEventListener("click", () => {
//   contactSection.scrollIntoView({
//     behavior: "smooth"
//   });
// });


// For Section-6 Image slider Button
// const slides = document.querySelectorAll(".slide");
// const next_Btn = document.querySelector(".arrow_img.right");
// const prev_Btn = document.querySelector(".arrow_img.left");

// let current = 0;

// function showSlide(index) {
//   slides.forEach(slide => slide.classList.remove("active"));
//   slides[index].classList.add("active");
// }

// next_Btn.addEventListener("click", () => {
//   current = (current + 1) % slides.length;
//   showSlide(current);
// });

// prev_Btn.addEventListener("click", () => {
//   current = (current - 1 + slides.length) % slides.length;
//   showSlide(current);
// });


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
  // Add more steps as needed
];

let currentStep = 0;

// Select elements
const processTexts = document.querySelectorAll('.process-text');
const processImages = document.querySelectorAll('.slide');
const prevBtn = document.querySelector('.prev');
const nextBtn = document.querySelector('.next');
const tabs = document.querySelectorAll('.tab');
const activeTabName = document.querySelector('.active-tab-name');
const sliderImages = document.querySelectorAll('.slide');

function showStep(index) {
  // Show/hide process texts
  processTexts.forEach((el, i) => {
    el.style.display = i === index ? 'block' : 'none';
  });

  // Show/hide images
  sliderImages.forEach((img, i) => {
    img.style.display = i === index ? 'block' : 'none';
  });

  // Update tab active class
  tabs.forEach((tab, i) => {
    tab.classList.toggle('active', i === index);
  });

  // Update active tab name at top with the tab's data-name
  if (window.innerWidth <= 768) {
    const tabName = tabs[index].getAttribute('data-name');
    activeTabName.textContent = tabName;
  }
}

// Initialize first step
showStep(currentStep);

// Event listeners for Prev/Next buttons
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


// Event listeners for tabs
tabs.forEach((tab, i) => {
  tab.addEventListener('click', () => {
    currentStep = i;
    showStep(currentStep);
  });
});

// Show/hide active tab name based on window size
function updateActiveTabNameVisibility() {
  if (window.innerWidth <= 768) {
    document.querySelector('.active-tab-name').style.display = 'block';
    // Set initial value
    const tabName = tabs[currentStep].getAttribute('data-name');
    activeTabName.textContent = tabName;
  } else {
    document.querySelector('.active-tab-name').style.display = 'none';
  }
}

// Initial check
updateActiveTabNameVisibility();

// Update on window resize
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