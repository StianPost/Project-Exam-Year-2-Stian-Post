import { apiCall } from './const';

const axios = require('axios').default;

export async function getCabins(url: string) {
  const response = await fetch(url);
  const data = await response.json();
  try {
  } catch (error) {}
  return data;
}
