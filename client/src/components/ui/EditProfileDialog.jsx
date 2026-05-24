import { useRef, useState } from 'react';
import { toast } from 'react-toastify';

import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogTrigger,
} from '@/components/ui/dialog';

import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarImage } from '@/components/ui/avatar';
import { Loader2, PenSquare, Upload } from 'lucide-react';
import { useAuth } from '../../../hooks';

const EditProfileDialog = () => {
  const { user, setUser, uploadPicture, updateUser } = useAuth();
  const uploadRef = useRef(null);
  const [picture, setPicture] = useState('');
  const [loading, setLoading] = useState(false);
  const [userData, setUserData] = useState({
    name: user.name,
    password: '',
    confirm_password: '',
});

const handleImageClick = () => {
  uploadRef.current.click();
};

const handlePictureChange = (e) => {
  const file = e.target.files[0];
  setPicture(file);
};

const handleUserData = (e) => {
  const { name, value } = e.target;
  setUserData({ ...userData, [name]: value });
};

const handleSaveChanges = async () => {
  setLoading(true);
  const { name, password, confirm_password } = userData;

  // Validation
      if (name.trim() === '') {
        setLoading(false);
        return toast.error("Name Can't be empty");
      } else if (password !== confirm_password) {
        setLoading(false);
        return toast.error("Passwords don't match");
      }
  
      try {
        // first check if picture has been updated or not
        let pictureUrl = '';
  
        if (picture) {
          // upload picture and save the image url
          pictureUrl = await uploadPicture(picture);
        }
        const userDetails = {
            name: userData.name,
            password: userData.password,
            picture: pictureUrl,
          };
    
          const res = await updateUser(userDetails);
          if (res.success) {
            setUser(res.user);
            setLoading(false);
            return toast.success('Updated successfully!');
          }
    
          setLoading(false);
      } catch (error) {
        console.log(error);
        toast.error('Something went wrong!');
        setLoading(false);
      }
    };
  
    return (
      <Dialog>
        <DialogTrigger asChild>
          <Button className="bg-blue-600 hover:bg-blue-600">
            <PenSquare className="mr-2 h-4 w-4" />
            Edit Profile
          </Button>
        </DialogTrigger>
  
        <DialogContent className="sm:max-w-[500px]">
          <div className="flex justify-center">
            <div className="relative h-40 w-40 cursor-pointer overflow-hidden rounded-full">
              <div
                className="absolute flex h-full w-full items-center justify-center"
                onClick={handleImageClick}
              >
                <input 
                <input
                type="file"
                className="hidden"
                ref={uploadRef}
                onChange={handlePictureChange}
              />
              
              <Upload height={50} width={50} color="#4e4646" />
              </div>
              
              {/* Display user avatar based on picture state */}
              {picture ? (
                <Avatar className="transition-all ease-in-out hover:z-0">
                  <AvatarImage src={URL.createObjectURL(picture)} />
                  