const tbody = document.getElementById("tbodyUserList");

window.onload = () => {
  getApiUserList();
};

const getApiUserList = async () => {
  showLoading();
  //aixos
  removeLoading();
};
