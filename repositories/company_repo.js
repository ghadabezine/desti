
import { ref } from 'vue';

export const repo = ref([]);

export function submitForm() {
    if (repo.$refs.form.validate()) {

        console.log('Form submitted');
        console.log('Data:', companyRepository.formData);
    }
}


// Function to reset the form




export function getCompanyList() {
    return repo
}

export function addCompany(company) {
    repo.push(company)
}



const formData = ref({
    serviceType: '',
    ageRestriction: '',
    budget: '',
    description: '',
    photos: []
});

function handleSubmit(repo) {
    if (repo.$refs.form.validate()) {
        const newCompany = {
            serviceType: formData.value.serviceType,
            ageRestriction: formData.value.ageRestriction,
            budget: formData.value.budget,
            description: formData.value.description,
            photos: formData.value.photos
        };
        addCompany(newCompany);
        console.log('Company added:', newCompany);
        console.log(repo);

        resetForm();
    }
}

export { formData, handleSubmit };


