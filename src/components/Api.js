class Api {
  constructor(baseUrl, options) {
    this._baseUrl = baseUrl;
    this._options = options;
  }

  _makeRequest(endpoint, method = "GET", body = null) {
    const options = {
      method,
      headers: { ...this._options.headers },
    };

    if (body) {
      options.headers["Content-Type"] = "application/json";
      options.body = JSON.stringify(body);
    }

    return fetch(`${this._baseUrl}${endpoint}`, options).then((res) => {
      if (!res.ok) Promise.reject(`Error: ${res.status}`);
      return res.json();
    });
  }

  getInitialCards() {
    return this._makeRequest("/cards");
  }

  createNewCard({ name, link }) {
    return this._makeRequest("/cards", "POST", { name, link });
  }

  deleteCard(cardId) {
    return this._makeRequest(`/cards/${cardId}`, "DELETE");
  }

  addLikes(cardId) {
    return this._makeRequest(`/cards/likes/${cardId}`, "PUT");
  }

  removeLikes(cardId) {
    return this._makeRequest(`/cards/likes/${cardId}`, "DELETE");
  }

  getUserInfo() {
    return this._makeRequest("/users/me");
  }

  editProfile(name, about) {
    return this._makeRequest("/users/me", "PATCH", { name, about });
  }

  editAvatar(avatar) {
    return this._makeRequest("/users/me/avatar", "PATCH", avatar);
  }
}

export const api = new Api(
  "https://around.nomoreparties.co/v1/web-ptbr-cohort-10",
  {
    headers: {
      authorization: "e00364f1-af4a-4601-a0ac-2228485dc1a7",
      "Content-Type": "application/json",
    },
  }
);
