export const fetchProducts = async () => {
  try {
    await new Promise(resolve => setTimeout(resolve, 1000));

    const response = await fetch('/data.json');
    if (!response.ok) {
      throw new Error('Failed to fetch products');
    }
    return response.json();
  } catch (e) {
    console.log(e, 'error')
  }
};