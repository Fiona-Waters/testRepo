import axios from "axios";
import { user } from "../stores.js";

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
        firstName: firstName,
        lastName: lastName,
        email: email,
        password: password,
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
        console.log("addcraft", response.data)
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
      console.log("HEY THERE")
      const response = await axios.post(this.baseUrl + "/api/crafts/" + craftid + "/spots/" + spotid, spot )
      console.log("done")
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
}

