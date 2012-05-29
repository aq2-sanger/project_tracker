class Project < ActiveRecord::Base
  attr_accessible :marker_symbol, :not_targeted_date, :targeting_complete_date, :targeting_in_progress_date, :pipeline_id

  belongs_to :pipeline

  validates :marker_symbol, :presence => true
  validates :pipeline, :presence => true

  before_save do |project|
    if project.not_targeted_date.blank?
      project.not_targeted_date = Date.today
    end
  end
end
