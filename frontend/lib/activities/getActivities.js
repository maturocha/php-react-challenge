export async function getActivities(params) {
  
  try {
    
    const activities = await fetch(`${process.env.NEXT_PUBLIC_API}/activities?${new URLSearchParams(params)}`, {
      method: 'GET',
    }).then((res) => res.json());
    
    return activities.data;

  } catch (error) {
    throw new Error(error.message);
  }
}