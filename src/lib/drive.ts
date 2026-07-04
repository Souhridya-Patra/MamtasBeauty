export async function fetchDriveImages(accessToken: string, folderId: string) {
  try {
    const query = encodeURIComponent(`'${folderId}' in parents and (mimeType contains 'image/') and trashed = false`);
    const url = `https://www.googleapis.com/drive/v3/files?q=${query}&fields=files(id,name,mimeType,thumbnailLink,webContentLink)`;
    
    const res = await fetch(url, {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    });
    
    if (!res.ok) {
      throw new Error(`Failed to fetch Drive files: ${res.statusText}`);
    }
    
    const data = await res.json();
    return data.files || [];
  } catch (error) {
    console.error('Error fetching drive images:', error);
    return [];
  }
}
