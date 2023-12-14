"use client"
import React from 'react'

import { useForm ,useFieldArray} from "react-hook-form";
import { MdFormatListBulletedAdd,MdDeleteForever,MdAddCircle } from "react-icons/md";

const Form = () => {
    const { register, handleSubmit,control } = useForm({
      defaultValues:{
        region:"",
        destination:"",
        shortDescription:"",
        longDescription:"",
        icon_values:{
          altitude:"",
          duration:"",
          coordinates:"",
          dailyActivity:"",
          grade:"",
        },
        availableDate:"",
        price:"",
        itinerary:[{
          heading:"",
          description:""
        }],
        includes:[{list:""}],
        excludes:[{list:""}],
        packaging_list:[{list:""}],
        paymentInfo:"",
        cancellationDetails:"",
        insurance:"",
        faq:""
      }
    });
    const onSubmit =async (data) =>{ 
      // e.preventDefault()
      console.log(data);
      const response = await fetch('/api/form',{
        method:'POST',
        body:JSON.stringify(data)
      })

      // try {
      //   // if (response.ok) {
      //   //   router
      //   // }
      // } catch (error) {
      //   console.log("this",error)
      // }
    }
    const onError=(errors)=>{
      console.log("form errors",errors)
    }
    const {fields:itineraryFields,append:itineraryAppend,remove:itineraryRemove} = useFieldArray({
      name:'itinerary',
      control,
     })
    const {fields:includesFields,append:includesAppend,remove:includesRemove} = useFieldArray({
      name:'includes',
      control,
     })
    const {fields:excludesFields,append:excludesAppend,remove:excludesRemove} = useFieldArray({
      name:'excludes',
      control,
     })
    const {fields:packagingFields,append:packagingAppend,remove:packagingRemove} = useFieldArray({
      name:'packaging_list',
      control,
     })
    return (
      <form onSubmit={handleSubmit(onSubmit,onError)} className='flex flex-col w-1/2 m-auto gap-5 my-5'>
        <div className='flex flex-col'>
            <label htmlFor='region'>Region</label>
            <input id='region' {...register("region")} />
            <label htmlFor='destination'>Destination</label>
            <input id='destination' {...register("destination")} />
            <label htmlFor='description1'>Short Description</label>
            <textarea id='description1' {...register("shortDescription")} />
            <label htmlFor='description2'>Long Description</label>
            <textarea id='description2' {...register("longDescription")} />
            <div className='flex flex-col w-1/2'>
              <label htmlFor='altitude'>altitude</label>
              <input id='altitude' {...register("icon_values.altitude")} />
              <label htmlFor='duration'>duration</label>
              <input id='duration' {...register("icon_values.duration")} />
              <label htmlFor='coordinates'>coordinates</label>
              <input id='coordinates' {...register("icon_values.coordinates")} />
              <label htmlFor='dailyactivity'>dailyactivity</label>
              <input id='dailyactivity' {...register("icon_values.dailyActivity")} />
              <label htmlFor='grade'>grade</label>
              <input id='grade' {...register("icon_values.grade")} />
              <label htmlFor='availableDate'>availableDate</label>
              <input id='availableDate' {...register("availableDate")} />
              <label htmlFor='price'>price</label>
              <input id='price' {...register("price")} />
            </div>
            <div>
              <h1 className='font-bold text-xl'>Itinearary</h1>
              <div>
                {
                  itineraryFields.map((field,index)=>{
                    return(
                      <div key={field.id} className='flex'>
                        <div className='flex flex-col w-full'>
                          <label htmlFor='heading'>Heading</label>
                          <textarea id='heading' {...register(`itinerary.${index}.heading`)} />
                          <label htmlFor='list'>Furthur explaination</label>
                          <textarea id='list' {...register(`itinerary.${index}.description`)} />
                        </div>
                        {
                          index>0 &&(
                            <button type='button' onClick={()=> itineraryRemove(index)}><MdDeleteForever className='w-9 h-9'/></button>
                          )
                        }
                      </div>
                    )
                  })
                }
                <button type='button' onClick={()=> itineraryAppend({heading:"",description:""})}><MdFormatListBulletedAdd className='w-9 h-9'/></button>
              </div>
            </div>
            <div>
              <h1 className='font-bold text-xl'>Includes</h1>
              <div className='flex flex-col gap-2'>
                {
                  includesFields.map((field,index)=>{
                    return(
                          <div className='flex' key={field.id}>
                            <textarea {...register(`includes.${index}.list`)} className='w-full'/>
                          {
                            index>0 &&(
                              <button type='button' onClick={()=> includesRemove(index)}><MdDeleteForever className='w-9 h-9'/></button>
                            )
                          }
                        </div>
                    )
                  })
                }
              </div>
              <button type='button' onClick={()=> includesAppend({list:""})}><MdAddCircle className='w-9 h-9'/></button>
            </div>
            <div>
              <h1 className='font-bold text-xl'>Excludes</h1>
              <div className='flex flex-col gap-2'>
                {
                  excludesFields.map((field,index)=>{
                    return(
                          <div className='flex' key={field.id}>
                            <textarea {...register(`excludes.${index}.list`)} className='w-full'/>
                          {
                            index>0 &&(
                              <button type='button' onClick={()=> excludesRemove(index)}><MdDeleteForever className='w-9 h-9'/></button>
                            )
                          }
                        </div>
                    )
                  })
                }
              </div>
              <button type='button' onClick={()=> excludesAppend({list:""})}><MdAddCircle className='w-9 h-9'/></button>
            </div>
            <div>
              <h1 className='font-bold text-xl'>Packaging_list</h1>
              <div className='flex flex-col gap-2'>
                {
                  packagingFields.map((field,index)=>{
                    return(
                          <div className='flex' key={field.id}>
                            <textarea {...register(`packaging_list.${index}.list`)} className='w-full'/>
                          {
                            index>0 &&(
                              <button type='button' onClick={()=> packagingRemove(index)}><MdDeleteForever className='w-9 h-9'/></button>
                            )
                          }
                        </div>
                    )
                  })
                }
              </div>
              <button type='button' onClick={()=> packagingAppend({list:""})}><MdAddCircle className='w-9 h-9'/></button>
            </div>
            {/* <label htmlFor=''></label>
            <input id='' {...register("")} />
            <label htmlFor=''></label>
            <input id='' {...register("")} />
            <label htmlFor=''></label>
            <input id='' {...register("")} />
            <label htmlFor=''></label>
            <input id='' {...register("")} />
            <label htmlFor=''></label>
            <input id='' {...register("")} />
            <label htmlFor=''></label>
            <input id='' {...register("")} /> */}

        </div>
        <label htmlFor='paymentInfo'>paymentInfo</label>
        <input id='paymentInfo' {...register("paymentInfo")} />
        <label htmlFor='cancellationDetails'>cancellationDetails</label>
        <input id='cancellationDetails' {...register("cancellationDetails")} />
        <label htmlFor='insurance'>insurance</label>
        <input id='insurance' {...register("insurance")} />
        <label htmlFor='faq'>faq</label>
        <input id='faq' {...register("faq")} />
        <input type="submit" />
      </form>
    )
}

export default Form