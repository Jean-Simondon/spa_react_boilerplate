

// retourne un tableau d'erreur à associer à linker avec le formulaire sur ses affichage d'erreur.
// Appeler valdiate au cours de la submission du formulaire

  // validate(form: HTMLFormElement): boolean {
  //   let isValid = true;
  //   const errors = this.state.errors;
  //   [...form.elements].forEach((item) => {
  //     if (item.name === 'email') {
  //       if (!(item instanceof HTMLInputElement)) {
  //         throw new TypeError('Invalid instance type.');
  //       }

  //       let error = '';
  //       if (item.value === '') {
  //         error = 'Please enter a value.';
  //         isValid = false;
  //       } else if (!/^.+@\S+\.\S+$/.test(item.value)) {
  //         error = 'Incorrect email address.';
  //         isValid = false;
  //       }
  //       errors[item.name] = error;
  //     }
  //     if (item.name === 'password') {
  //       if (!(item instanceof HTMLInputElement)) {
  //         throw new TypeError('Invalid instance type.');
  //       }

  //       let error = '';
  //       if (item.value === '') {
  //         error = 'Please enter a value.';
  //         isValid = false;
  //       }
  //       errors[item.name] = error;
  //     }
  //   });
  //   this.setState({ errors });

  //   return isValid;
  // }
