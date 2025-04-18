import './App.css';
import '@mantine/core/styles.css';

import { Button, MantineProvider } from '@mantine/core';
import { useForm, isNotEmpty, isEmail, isInRange, hasLength, matches } from '@mantine/form';
import { Group, TextInput, NumberInput } from '@mantine/core';

function App() {
  const form = useForm({
    mode: 'uncontrolled',
    initialValues: {
      name: '',
      job: '',
      email: '',
      favoriteColor: '',
      age: 18,
    },

    validate: {
      name: hasLength({ min: 2, max: 10 }, 'Name must be 2-10 characters long'),
      job: isNotEmpty('Enter your current job'),
      email: isEmail('Invalid email'),
      favoriteColor: matches(/^#([0-9a-f]{3}){1,2}$/, 'Enter a valid hex color'),
      age: isInRange({ min: 18, max: 99 }, 'You must be 18-99 years old to register'),
    },
  });

  const handleSubmit = (values: any) => {
    console.log(values);
  };

  return (
    <MantineProvider>
      <div>
        <form onSubmit={form.onSubmit(handleSubmit)}>
          <TextInput
            label="Name"
            placeholder="Name"
            withAsterisk
            {...form.getInputProps('name')}
          />
          <TextInput
            label="Your job"
            placeholder="Your job"
            withAsterisk
            mt="md"
            {...form.getInputProps('job')}
          />
          <TextInput
            label="Your email"
            placeholder="Your email"
            withAsterisk
            mt="md"
            {...form.getInputProps('email')}
          />
          <TextInput
            label="Your favorite color"
            placeholder="Your favorite color"
            withAsterisk
            mt="md"
            {...form.getInputProps('favoriteColor')}
          />
          <NumberInput
            label="Your age"
            placeholder="Your age"
            withAsterisk
            mt="md"
            hideControls
            {...form.getInputProps('age')}
          />

          <Button
            type="submit"
            style={{
              backgroundColor: 'cornflowerblue',
              color: 'white',
              fontSize: '1.2rem',
              margin: "2rem 7rem"
            }}
          >
            Submit
          </Button>
        </form>
      </div>

    </MantineProvider>
  );
}

export default App;
