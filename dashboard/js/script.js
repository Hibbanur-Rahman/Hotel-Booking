new DataTable('#example', {
  columnDefs: [
      {
          targets: [0],
          orderData: [0, 1]
      },
      {
          targets: [1],
          orderData: [1, 0]
      },
      {
          targets: [4],
          orderData: [4, 0]
      }
  ]
});
let table = new DataTable('#example');
 
table.on('click', 'tbody tr', function () {
    let data = table.row(this).data();
 
    alert('You clicked on ' + data[0] + "'s row");
});