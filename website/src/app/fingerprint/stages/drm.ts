export async function detectSupportedDRMs() {
  // List of DRM systems to check
  const drmSystems = {
    widevine: ["com.widevine.alpha"],
    playready: ["com.microsoft.playready"],
    clearkey: ["webkit-org.w3.clearkey", "org.w3.clearkey"],
    primetime: ["com.adobe.primetime", "com.adobe.access"],
    fairplay: ["com.apple.fairplay"],
  };

  // Configuration for checking audio capabilities
  const audioConfig = {
    initDataTypes: ["cenc"],
    audioCapabilities: [
      {
        contentType: 'audio/mp4; codecs="mp4a.40.2"',
      },
    ],
  };

  // Helper function to check a single DRM system
  async function checkDRM(keySystem: string) {
    try {
      await navigator.requestMediaKeySystemAccess(keySystem, [audioConfig]);
      return true;
    } catch (e) {
      return false;
    }
  }

  // Object to store the results
  const drmPromises = Object.entries(drmSystems).map(async ([key, value]) => {
    for (const system of value) {
      const isSupported = await checkDRM(system);
      if (isSupported) {
        return { [key]: true };
      }
    }
    return { [key]: false };
  });

  // Wait for all DRM checks to complete
  const drmResultsArray = await Promise.all(drmPromises);

  // Merge individual results into a single object
  return drmResultsArray.reduce((acc, cur) => ({ ...acc, ...cur }), {});
}
