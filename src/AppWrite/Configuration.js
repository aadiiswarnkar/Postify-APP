import config from "../config/config";
import { Client, ID, Databases, Storage, Query } from "appwrite";


export class Service {
    client = new Client();
    databases;
    bucket; 

    constructor(){
        this.client
            .setEndpoint(config.appwriteurl)
            .setProject(config.appwriteprojectid);
        this.databases = new Databases(this.client)
        this.bucket = new Storage(this.client)
    }

    async createPost({title,slug,content,featuredImage,status,userId}){
        try{
            return await this.databases.createDocument(
                config.appwritedatabaseid,
                config.appwritecollectionid,
                slug,
                {
                title,
                content,
                featuredImage,
                status,
                userId
            },
           )
        }catch(error){
            console.log("Appwrite service :: createPost :: error",error);
        }
    }

    async updatePost(slug,{title,content,featuredImage,status}){
        try{
           return await this.databases.updateDocument(
            config.appwritedatabaseid,
            config.appwritecollectionid,
            slug,
            {
            title,
            content,
            featuredImage,
            status
           })
        }catch(error){
            console.log("Appwrite service :: updatePost :: error",error);
        }


    }
    async DeletePost(slug){
        try{
          await this.databases.deleteDocument(config.appwritedatabaseid,config.appwritecollectionid,slug)
          return true
        }catch(error){
            console.log("Appwrite service :: deletePost :: error",error);
            return false
        }


    }
    async getPost(slug){
        try{
        return await this.databases.getDocument(
            config.appwritedatabaseid,
            config.appwritecollectionid,
            slug)
        
        }catch(error){
            console.log("Appwrite service :: getPost :: error",error);
            return false
        }


    }
    async getposts(){
        try{
           return await this.databases.listDocuments(
            config.appwritedatabaseid,
            config.appwritecollectionid,
            [
                Query.equal("status", "active")
            ]
           )
          }catch(error){
              console.log("Appwrite service :: getposts :: error",error);
              return false
          }
    }

  

    async uploadFile(file){
        try{
            return await this.bucket.createFile(config.appwritebucketid,ID.unique(),file,
          
        )
            
           }catch(error){
               console.log("Appwrite service :: uploadFile :: error",error);
               return false
           }
    }

    async deleteFile(fileId){
        try{
          await this.bucket.deleteFile(config.appwritebucketid,fileId)  
          return true
            
           }
           catch(error){
               console.log("Appwrite service :: deleteFile :: error",error);
               return false
           }
    }

    getFilePreview(fileId){
        return this.bucket.getFilePreview(config.appwritebucketid,fileId)
    }

}

const service = new Service()

export default service