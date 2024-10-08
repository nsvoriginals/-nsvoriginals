type skillprops={
    imgsource:string,
    skillName:string
}
export const SkillCard=(skillprops:skillprops)=>{
    return <div className="flext justify-center items-center ">
        <img src={skillprops.imgsource} alt="" />
        <h1>{skillprops.skillName}</h1>
    </div>
}