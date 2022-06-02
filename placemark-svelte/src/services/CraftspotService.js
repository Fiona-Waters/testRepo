import axios from "axios";
import { user } from "../stores.js";
import sanitizeHtml from "sanitize-html";

export class CraftspotService {
  baseUrl = "";

  constructor(baseUrl) {
    this.baseUrl = baseUrl;
    const craftspotCredentials = localStorage.craftspot
    if (craftspotCredentials) {
      const savedUser = JSON.parse(craftspotCredentials)
      user.set({
        email: savedUser.email,
        token: savedUser.token,
      });
      axios.defaults.headers.common["Authorization"] = "Bearer " + savedUser.token;
    }
  }

  async login(email, password) {
    try {
      const response = await axios.post(`${this.baseUrl}/api/users/authenticate`, {email, password});
      axios.defaults.headers.common["Authorization"] = "Bearer " + response.data.token;
      if (response.data.success) {
        user.set({
          email: email,
          token: response.data.token,
        });
        localStorage.craftspot = JSON.stringify({email:email, token:response.data.token});
        return true;
      }
      return false;
    } catch (error) {
      return false;
    }
  }

  async logout() {
    user.set({
      email: "",
      token: "",
    });
    axios.defaults.headers.common["Authorization"] = "";
    localStorage.removeItem("craftspot");
  }

  async signup(firstName, lastName, email, password) {
    try {
      const userDetails = {
        firstName: sanitizeHtml(firstName),
        lastName: sanitizeHtml(lastName),
        email: sanitizeHtml(email),
        password: sanitizeHtml(password),
      };
      await axios.post(this.baseUrl + "/api/users", userDetails);
      return true;
    } catch (error) {
      return false;
    }
  }

  async addCraft(craft) {
    try {
        const response = await axios.post(this.baseUrl + "/api/crafts", craft);
        return response.data;
    } catch (error) {
        return false;
    }
  }

  async getAllCrafts() {
      try {
        const response = await axios.get(this.baseUrl + "/api/crafts");
        return response.data;
      } catch (error) {
          return [];
      }
  }

  async getUserCrafts() {
    const response = await axios.get(this.baseUrl + "/api/crafts/usercrafts")
    return response.data
  }

  async getSpotsByCraftId(craftid) {
    try {
      const response = await axios.get(this.baseUrl + "/api/crafts/" + craftid + "/spots")
      return response.data;
    } catch (error) {
      return [];
    }
  }

  async getAllSpots() {
    try {
      const response = await axios.get(this.baseUrl + "/api/spots")
      return response.data;
    } catch (error) {
      return [];
    }
  }

  async addSpot(craftid, spot) {
    try {
      const response = await axios.post(this.baseUrl + "/api/crafts/"+ craftid + "/spots", spot);
      return response.data;
    } catch (error) {
      return false;
    }
  }

  async getSpotById(spotid) {
    try {
      const response = await axios.get(this.baseUrl + "/api/spots/" + spotid);
      return response.data;
  } catch (error) {
    return {}
  }
}

  async updateSpot(craftid, spotid, spot) {
    try {
      const response = await axios.post(this.baseUrl + "/api/crafts/" + craftid + "/spots/" + spotid, spot );
      return response.data;
    } catch (error) {
      return []
    }
  }

  async deleteSpot(spotid) {
    try {
      const response = await axios.delete(this.baseUrl + "/api/spots/" + spotid)
      return true;
    } catch (error) {
      return false;
    }
  }

  async deleteCraft(craftid) {
    try {
      const response = await axios.delete(this.baseUrl + "/api/crafts/" + craftid);
      return true;
    } catch (error) {
      return false;
    }
  }

  async getAllUsers() {
    try {
      const response = await axios.get(this.baseUrl + "/api/users");
      return response.data;
    } catch (error) {
        return [];
    }
}

async getLoggedInUser() {
  try {
    const loggedInUser = await axios.get(this.baseUrl + "/api/users/loggedInUser");
    return loggedInUser;
} catch (error) {
  console.log(error)
  return {}
}
}

async updateUserDetails(userid, user) {
  try {
    const response = await axios.post(this.baseUrl + "/api/users/updateUser/" + userid, user);
    return response;
  } catch (error) {
    console.log(error);
    return {}
  }
}

  async deleteUser(userid) {
    try {
      const response = await axios.delete(this.baseUrl + "/api/users/" + userid);
      return true;
    } catch (error) {
      console.log(error)
      return false;
    }
  }

  async getAnalyticsData() {
    try {
      const response = await axios.get(this.baseUrl + "/api/analytics");
      return response;
    } catch (error) {
      console.log(error);
      return [];
    }
  }

  async uploadImage(spotid, image) {
    try {
      const response = await axios.post(this.baseUrl + "/api/spots/" + spotid + "/uploadimage", {imagefile:image}, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
    })
      return true;
    } catch (error) {
      console.log(error);
      return false;
    }
  }

  async deleteImage(spotid) {
    try {
      const response = await axios.delete(this.baseUrl + "/api/spots/" + spotid + "/deleteimage")
      return true;
    } catch (error) {
      console.log(error);
      return false;
    }
  }

  async getSpotsPerCategory() {
    try {
      const info = await axios.get(this.baseUrl + "/api/spots/categories")
      return info.data;
    } catch (error) {
      console.log(error);
      return [];
    }
  } 
}

