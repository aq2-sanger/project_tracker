class Pipeline < ActiveRecord::Base
  attr_accessible :name

  validate :name, :unique => true
end
