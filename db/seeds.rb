10.times do |index|
user = User.new(
    :first_name => "Random",
    :last_name => "User",
    :username => "#{first_name} #{last_name}",
    :email => "#{first_name}.#{num}@localtinkers.com",
    :password => '12341234'
  )
  u.save!(:validate => false)
end
