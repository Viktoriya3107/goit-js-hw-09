const STORAGE_KEY = "feedback-form-state";

const formEl = document.querySelector(".feedback-form");

let formData = {
  email: "",
  message: "",
};

const savedData = localStorage.getItem(STORAGE_KEY);

if (savedData) {
  const parsedData = JSON.parse(savedData);

  formData = {
    email: parsedData.email || "",
    message: parsedData.message || "",
  };

  formEl.elements.email.value = formData.email;
  formEl.elements.message.value = formData.message;
}


formEl.addEventListener("input", event => {
  const { name, value } = event.target;
  if (!name) return;

  formData[name] = value;
  localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
});


formEl.addEventListener("submit", event => {
  event.preventDefault();

  const emailTrimmed = formData.email.trim();
  const messageTrimmed = formData.message.trim();

  if (!emailTrimmed || !messageTrimmed) {
    alert("Fill please all fields");
    return;
  }

  
  console.log(formData);

  
  localStorage.removeItem(STORAGE_KEY);
  formData = { email: "", message: "" };
  formEl.reset();
});
