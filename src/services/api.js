// API Service for Pet Finder
const API_BASE_URL = 'https://pet-finder-api.vercel.app/api';

// Pets API
export const petsAPI = {
  // Get all pets
  getAll: async () => {
    try {
      const response = await fetch(`${API_BASE_URL}/pets`);
      const data = await response.json();
      return data;
    } catch (error) {
      console.error('Error fetching pets:', error);
      throw error;
    }
  },

  // Get pet by ID
  getById: async (id) => {
    try {
      const response = await fetch(`${API_BASE_URL}/pets/${id}`);
      const data = await response.json();
      return data;
    } catch (error) {
      console.error('Error fetching pet:', error);
      throw error;
    }
  },

  // Create new pet
  create: async (formData) => {
    try {
      const response = await fetch(`${API_BASE_URL}/pets`, {
        method: 'POST',
        body: formData,
      });
      const data = await response.json();
      return data;
    } catch (error) {
      console.error('Error creating pet:', error);
      throw error;
    }
  },

  // Update pet
  update: async (id, formData) => {
    try {
      const response = await fetch(`${API_BASE_URL}/pets/${id}`, {
        method: 'PUT',
        body: formData,
      });
      const data = await response.json();
      return data;
    } catch (error) {
      console.error('Error updating pet:', error);
      throw error;
    }
  },

  // Delete pet
  delete: async (id) => {
    try {
      const response = await fetch(`${API_BASE_URL}/pets/${id}`, {
        method: 'DELETE',
      });
      const data = await response.json();
      return data;
    } catch (error) {
      console.error('Error deleting pet:', error);
      throw error;
    }
  }
};

// Shelters API
export const sheltersAPI = {
  // Get all shelters
  getAll: async () => {
    try {
      const response = await fetch(`${API_BASE_URL}/shelters`);
      const data = await response.json();
      return data;
    } catch (error) {
      console.error('Error fetching shelters:', error);
      throw error;
    }
  },

  // Get shelter by ID
  getById: async (id) => {
    try {
      const response = await fetch(`${API_BASE_URL}/shelters/${id}`);
      const data = await response.json();
      return data;
    } catch (error) {
      console.error('Error fetching shelter:', error);
      throw error;
    }
  },

  // Create new shelter
  create: async (formData) => {
    try {
      const response = await fetch(`${API_BASE_URL}/shelters`, {
        method: 'POST',
        body: formData,
      });
      const data = await response.json();
      return data;
    } catch (error) {
      console.error('Error creating shelter:', error);
      throw error;
    }
  }
};
