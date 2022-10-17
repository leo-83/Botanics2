Plant.delete_all 
User.delete_all 

i = 1 
5.times do 
  @user = User.create(
    email: "test#{i}@email.com",
    password: "password",
    name: "test#{i}",
  )
  i++

  10.times do 
    name = Faker::Tea.variety
    Plant.create(
      name: name, 
      desc: Faker::Tea.type
    )
  end 
end

puts Plant.all.count 