import {useForm} from 'react-hook-form';
import * as yup from 'yup'
import {yupResolver} from '@hookform/resolvers/yup'    // for validation
import {addDoc,collection} from 'firebase/firestore'  // for create a post that you enter data that directly goes to database.
import { auth, db } from '../../config/firebase';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';

interface CreateFormData {
    title:string;
    description: string;
}



export const CreateForm = () => {


  const [user] = useAuthState(auth)
  const navigate = useNavigate();

  const schema = yup.object({
    title: yup.string().required("You must add a Title."),
    description : yup.string().required('You must add a Description')
  });


  const {register, handleSubmit, formState:{errors}} = useForm <CreateFormData>({
      resolver :yupResolver(schema)
  })


  const postsRef = collection(db, 'posts') 


  const onCreatePost = async (data : CreateFormData) => {
      await addDoc(postsRef,{
        title:data.title,
        description: data.description,
        username :user?.displayName,
        userId: user?.uid,
      })
      navigate('/')
  }


  return (
    <form onSubmit={handleSubmit(onCreatePost)}>
      <input placeholder='Title...' {...register('title')} />
      <p style={{color:'red'}}>{errors.title?.message}</p>
      <textarea placeholder='Description...' {...register('description')} />
      <p style={{color:'red'}}>{errors.description?.message}</p>
      <input type='submit'  className='submitForm'/>
    </form>
  )
}