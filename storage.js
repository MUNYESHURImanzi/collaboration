db.collection('Report').add({
    name: names,
    email: email,
    tel: tel,
    fname: fname,
    fid: fid,
    province: province,
    district: district,
    sector: sector,
    cell: cell
  })
  .then(function(docRef) {
    console.log('Document written with ID: ', docRef.id);
    
    // Map the object that was saved to Firestore
    const report = {
      name: names,
      email: email,
      tel: tel,
      fname: fname,
      fid: fid,
      province: province,
      district: district,
      sector: sector,
      cell: cell,
      id: docRef.id // Add the document ID to the object
    };
    
    console.log('Report object:', report);
    
    // form.reset(); // Reset the form
  })
  .catch(function(error) {
    console.error('Error adding document: ', error);
  });
  