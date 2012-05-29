# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)

[
  'EUCOMM',
  'KOMP-CSD',
  'SANGER_FACULTY'
].each do |pipeline_name|
  Pipeline.create!(:name => pipeline_name)
end
