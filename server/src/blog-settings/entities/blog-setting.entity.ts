import {
  Column,
  Entity,
} from 'typeorm';
import { CommonEntity } from 'src/db/base';

@Entity()
export class BlogSetting extends CommonEntity {

  @Column({ default: '' })
  site_title: string;

  @Column({ default: '' })
  site_url: string;

  @Column({ default: '' })
  site_keys: string;

  @Column({ default: '' })
  site_description: string;

  @Column({ default: '' })
  site_logo: string;

  @Column({ default: '' })
  site_favicon: string;

  @Column({ default: '' })
  site_theme: string;

  @Column({ default: '' })
  site_language: string;

  @Column({ default: '' })
  site_timezone: string;

  @Column({ default: '' })
  site_meta_tags: string;

  @Column({ default: '' })
  default_role: string;

  @Column({ default: '' })
  analytics_code: string;

  @Column({ default: '' })
  custom_css: string;

  @Column({ default: '' })
  custom_js: string;
  
  @Column({ default: true })
  allow_comments: boolean;
  
  @Column({ default: false })
  comment_approval_required: boolean;
  
  @Column({ default: false })
  comment_notification_email: boolean;
  
  @Column({ default: false })
  enable_captcha: boolean;
  
  @Column({ default: true })
  allow_registration: boolean;
  
  @Column({ default: true })
  is_active: boolean;
  
}
