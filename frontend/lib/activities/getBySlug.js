export async function getBySlug(slug) {
  
  try {  
    const activities = await fetch(`${process.env.NEXT_PUBLIC_API}/activities/${slug}`, {
      method: 'GET',
    }).then((res) => res.json());
    
    return activities;

  } catch (error) {
    throw new Error(error.message);
  }
}