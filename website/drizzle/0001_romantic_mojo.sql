ALTER TABLE "fingerprint_visit" ADD COLUMN "keyboard_layout" varchar;--> statement-breakpoint
CREATE INDEX IF NOT EXISTS "keyboard_layout_idx" ON "fingerprint_visit" USING btree ("keyboard_layout");