const SingleArticlePage = async ({params}) => {
  const {id} = await params;
  return <div> Single Article Page {id}</div>
  
};

export default SingleArticlePage