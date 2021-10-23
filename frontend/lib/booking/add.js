export async function addBooking(data) {
  
  try {
    
    const booking = await fetch(`${process.env.NEXT_PUBLIC_API}/booking/add`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
        // 'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: JSON.stringify(data)
    }).then((res) => res.json());
    
    return booking;

  } catch (error) {
    throw new Error(error.message);
  }
}