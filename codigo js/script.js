// Initialize Local Storage
const storage = window.localStorage;

// Docente CRUD
const docenteForm = document.getElementById('docente-form');
const docenteTable = document.getElementById('docente-table-body');
let docentes = storage.getItem('docentes') ? JSON.parse(storage.getItem('docentes')) : [];

// Add event listener to the submit button for docentes
document.getElementById('add-docente').addEventListener('click', (e) => {
    e.preventDefault();
    const apellido = document.getElementById('apellido').value;
    const nombre = document.getElementById('nombre').value;
    const mail = document.getElementById('mail').value;
    const cumple = document.getElementById('cumple').value;
    const cel = document.getElementById('cel').value;

    // Create a new docente object
    const docente = {
        id: Date.now(),
        apellido,
        nombre,
        mail,
        cumple,
        cel,
    };

    // Add the new docente to the array
    docentes.push(docente);

    // Store the data in Local Storage
    storage.setItem('docentes', JSON.stringify(docentes));

    // Clear the form fields
    docenteForm.reset();

    // Display the data in the table
    displayDocentes();
});

// Function to display the docente data in the table
function displayDocentes() {
    docenteTable.innerHTML = '';
    docentes.forEach((docente) => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${docente.apellido}</td>
            <td>${docente.nombre}</td>
            <td>${docente.mail}</td>
            <td>${docente.cumple}</td>
            <td>${docente.cel}</td>
            <td>
                <button class="btn btn-danger delete-docente" data-id="${docente.id}">Eliminar</button>
            </td>
        `;
        docenteTable.appendChild(row);
    });
    addDocenteDeleteEventListeners(); // Agrega event listeners para los nuevos botones de eliminar
}

// Call the display function to display the initial docente data
displayDocentes();

// Add event listener to the docente table for delete buttons
function addDocenteDeleteEventListeners() {
    const deleteButtons = document.querySelectorAll('.delete-docente');
    deleteButtons.forEach((button) => {
        button.addEventListener('click', (e) => {
            const id = parseInt(e.target.dataset.id);
            deleteDocente(id);
        });
    });
}

// Function to delete a docente
function deleteDocente(id) {
    docentes = docentes.filter((docente) => docente.id !== id);
    storage.setItem('docentes', JSON.stringify(docentes));
    displayDocentes();
}

// Material CRUD
const materialForm = document.getElementById('material-form');
const materialTable = document.getElementById('material-table-body');
let materials = storage.getItem('materials') ? JSON.parse(storage.getItem('materials')) : [];

// Add event listener to the submit button for materials
document.getElementById('add-material').addEventListener('click', (e) => {
    e.preventDefault();
    const name = document.getElementById('name').value;
    const codi = document.getElementById('codi').value;
    const anho = document.getElementById('anho').value;
    const docente = document.getElementById('docente').value;
    const carrera = document.getElementById('carrera').value;

    // Create a new material object
    const material = {
        id: Date.now(),
        name,
        codi,
        anho,
        docente,
        carrera,
    };

    // Add the new material to the array
    materials.push(material);

    // Store the data in Local Storage
    storage.setItem('materials', JSON.stringify(materials));

    // Clear the form fields
    materialForm.reset();

    // Display the data in the table
    displayMaterials();
});

// Function to display the material data in the table
function displayMaterials() {
  materialTable.innerHTML = '';
  materials.forEach((material) => {
      const row = document.createElement('tr');
      row.innerHTML = `
          <td>${material.name}</td>
          <td>${material.codi}</td>
          <td>${material.anho}</td>
          <td>${material.docente}</td>
          <td>${material.carrera}</td>
          <td>
              <button class="btn btn-danger delete-material" data-id="${material.id}">Eliminar</button>
          </td>
      `;
      materialTable.appendChild(row);
  });
  addMaterialDeleteEventListeners(); // Agrega event listeners para los nuevos botones de eliminar
}

// Call the display function to display the initial material data
displayMaterials();

// Add event listener to the material table for delete buttons
function addMaterialDeleteEventListeners() {
  const deleteButtons = document.querySelectorAll('.delete-material');
  deleteButtons.forEach((button) => {
      button.addEventListener('click', (e) => {
          const id = parseInt(e.target.dataset.id);
          deleteMaterial(id);
      });
  });
}

// Function to delete a material
function deleteMaterial(id) {
  materials = materials.filter((material) => material.id !== id);
  storage.setItem('materials', JSON.stringify(materials));
  displayMaterials();
}
