ALTER TABLE ONLY public.users
ADD CONSTRAINT users_id_fkey FOREIGN KEY (id) REFERENCES auth.users(id)
on delete cascade;