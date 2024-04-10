interface Props {
  params: { id: number; photoId: number }
}
const UserPhotosPage = ({params: { id, photoId }} : Props) => {
  return (
    <div>Yay {photoId} for {id}</div>
  );
}
export default UserPhotosPage