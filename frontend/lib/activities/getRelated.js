export async function getRelated(id) {
  
  try {  
    const realated = await fetch(`${process.env.NEXT_PUBLIC_API}/activities/${id}/related`, {
      method: 'GET',
    }).then((res) => res.json());
    
    return realated;

  } catch (error) {
    throw new Error(error.message);
  }
}